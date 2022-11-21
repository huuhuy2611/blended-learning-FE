import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";
import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
import EqualizerTwoToneIcon from "@mui/icons-material/EqualizerTwoTone";
import SignalCellularAltTwoToneIcon from "@mui/icons-material/SignalCellularAltTwoTone";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import ThumbDownOffAltTwoToneIcon from "@mui/icons-material/ThumbDownOffAltTwoTone";
import { useRouter } from "next/router";
import { usePostsByClassroom } from "@/common/hooks/use-post";
import { useComments } from "@/common/hooks/use-comment";
import { useUsersByClassroom } from "@/common/hooks/use-user";
import { DataGrid } from "@mui/x-data-grid";
import { CommentItem } from "@/common/types/comment.type";
import { sortBy } from "lodash";
import { useTagsByClassroom } from "@/common/hooks/use-tag";

const AdminReportByClassroom = () => {
  const router = useRouter();
  const classroomId = router.query.classroomId as string;
  const { data: dataPosts } = usePostsByClassroom({ classroomId });
  const { data: dataComments } = useComments({
    classroomId,
    order: "HIGH_SCORES",
  });
  const { data: dataTags } = useTagsByClassroom(classroomId);
  const { data: dataUsers } = useUsersByClassroom(classroomId);

  const chapterTags = useMemo(
    () =>
      dataTags?.filter((item) => item.type === "SYLLABUS" && !item.parentId) ||
      [],
    [dataTags]
  );

  const dataPostsByChapter = useMemo(() => {
    if (!chapterTags || !dataPosts) return [];

    return chapterTags.map((tag) => {
      const filterPostsByChapter = dataPosts
        .filter(({ tags }) => {
          const tagIds = tags?.map(({ id }) => id) || [];
          const tagParentIds =
            tags?.map(({ parentId }) => parentId && parentId) || [];

          return [...tagIds, ...tagParentIds].includes(tag.id);
        })
        .map((item) => ({
          ...item,
          comments:
            dataComments?.filter((comment) => comment.postId === item.id) || [],
        }));

      return { ...tag, posts: filterPostsByChapter };
    });
  }, [dataPosts, chapterTags, dataComments]);

  console.log(11, dataPostsByChapter);

  const numInteractive = useMemo(() => {
    if (!dataPosts || !dataComments) return { like: 0, dislike: 0 };
    let countLiked = 0;
    let countDisliked = 0;

    dataPosts.forEach(({ numUpVote, numDownVote }) => {
      countLiked += numUpVote || 0;
      countDisliked += numDownVote || 0;
    });

    dataComments.forEach(({ numUpVote, numDownVote }) => {
      countLiked += numUpVote || 0;
      countDisliked += numDownVote || 0;
    });

    return {
      like: countLiked,
      dislike: countDisliked,
    };
  }, [dataPosts, dataComments]);

  const columnsDataByUser = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
      editable: false,
      sortable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
      editable: false,
      sortable: false,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 150,
      editable: false,
      sortable: false,
    },
    { field: "numPost", headerName: "Num. Posts", width: 150 },
    { field: "numComment", headerName: "Num. Comments", width: 150 },
    { field: "numLike", headerName: "Num. Like", width: 150 },
    { field: "numDislike", headerName: "Num. Dislike", width: 150 },
  ];

  const rowsDataByUser = useMemo(() => {
    if (!dataPosts || !dataComments || !dataUsers) return [];

    return sortBy(
      dataUsers
        .filter((item) => item.role === "STUDENT")
        .map((user) => {
          let numPost = 0;
          let numComment = 0;
          let numLike = 0;
          let numDislike = 0;

          dataPosts.forEach((post) => {
            if (post.user.id === user.id) {
              numPost += 1;
              numLike += post.numUpVote || 0;
              numDislike += post.numDownVote || 0;
            }
          });
          dataComments.forEach((comment: CommentItem) => {
            if (comment.user.id === user.id) {
              numComment += 1;
              numLike += comment.numUpVote || 0;
              numDislike += comment.numDownVote || 0;
            }
          });
          return {
            ...user,
            numPost,
            numComment,
            numLike,
            numDislike,
          };
        }),
      [({ numLike }) => -numLike]
    );
  }, [dataPosts, dataComments, dataUsers]);

  const columnsDataByChapter = [
    {
      field: "tag",
      headerName: "Chapter name",
      width: 500,
      editable: false,
      sortable: false,
    },
    { field: "numPost", headerName: "Num. Posts", width: 150 },
    { field: "numComment", headerName: "Num. Comments", width: 150 },
    { field: "numLike", headerName: "Num. Like", width: 150 },
    { field: "numDislike", headerName: "Num. Dislike", width: 150 },
  ];

  const rowsDataByChapter = useMemo(() => {
    if (!dataPostsByChapter) return [];

    return dataPostsByChapter.map((item) => {
      const { posts, ...rest } = item;

      let numComment = 0;
      let numLike = 0;
      let numDislike = 0;

      posts.forEach((post) => {
        numComment += post.comments.length;
        numLike += post.numUpVote || 0;
        numDislike += post.numDownVote || 0;

        post.comments.forEach((comment) => {
          numLike += comment.numUpVote || 0;
          numDislike += comment.numDownVote || 0;
        });
      });

      return {
        ...rest,
        numPost: posts.length,
        numComment,
        numLike,
        numDislike,
      };
    });
  }, [dataPostsByChapter]);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ gridTemplateColumns: "repeat(3, 1fr" }}>
        <Grid item xs={4}>
          <Card
            className="div-center"
            sx={{
              p: 3,
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography variant="h6">Total Posts</Typography>
              <Typography variant="h3">{dataPosts?.length || 0}</Typography>
              <Box sx={{ height: "22px" }} />
            </Box>
            <Box>
              <BarChartTwoToneIcon sx={{ fontSize: 32, color: "error.main" }} />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card
            className="div-center"
            sx={{
              p: 3,
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography variant="h6">Total Comments</Typography>
              <Typography variant="h3">{dataComments?.length || 0}</Typography>
              <Typography variant="subtitle2" sx={{ color: "primary.main" }}>
                Average comments per post:{" "}
                {(dataPosts?.length || 0) / (dataComments?.length || 1)}
              </Typography>
            </Box>
            <Box>
              <EqualizerTwoToneIcon
                sx={{ fontSize: 32, color: "warning.main" }}
              />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card
            className="div-center"
            sx={{
              p: 3,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography variant="h6">Total Interactive</Typography>
              <Box className="div-center" sx={{ justifyContent: "flex-start" }}>
                <ThumbUpTwoToneIcon
                  sx={{ fontSize: 20, mr: 1, mt: 1, color: "info.main" }}
                />
                <Typography variant="h3">{numInteractive.like}</Typography>
              </Box>
              <Box className="div-center" sx={{ justifyContent: "flex-start" }}>
                <ThumbDownOffAltTwoToneIcon
                  sx={{ fontSize: 20, mr: 1, mt: 1, color: "error.main" }}
                />
                <Typography variant="h3">{numInteractive.dislike}</Typography>
              </Box>
            </Box>
            <Box>
              <SignalCellularAltTwoToneIcon
                sx={{ fontSize: 32, color: "success.main" }}
              />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ width: "100%", p: 3 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Users Details
            </Typography>
            <Box sx={{ width: "100%", height: "400px" }}>
              <DataGrid
                rows={rowsDataByUser}
                columns={columnsDataByUser}
                pageSize={5}
                rowsPerPageOptions={[5]}
                hideFooterSelectedRowCount
                // onSelectionModelChange={(value) => setSelectedUserIds(value)}
              />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ width: "100%", p: 3 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Report by chapter
            </Typography>
            <Box sx={{ width: "100%", height: "400px" }}>
              {/* {dataPostsByChapter.map((item) => (
                <Box key={item.id}>
                  <Typography variant="h4">{item.tag}</Typography>
                  {item.posts?.length ? item.posts.map((post) => (
                    <Box key={post.id}></Box>
                  ))}
                </Box>
              ))} */}
              <DataGrid
                rows={rowsDataByChapter}
                columns={columnsDataByChapter}
                pageSize={5}
                rowsPerPageOptions={[5]}
                hideFooterSelectedRowCount
                // onSelectionModelChange={(value) => setSelectedUserIds(value)}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminReportByClassroom;
