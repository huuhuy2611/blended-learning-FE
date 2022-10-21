import { useEffect, useState } from "react";
import { Box, Card, Grid } from "@mui/material";
import LeftClassroom from "./left-classroom";
import PostDetails from "./post-details";
import { useRouter } from "next/router";
import { usePortsByClassroom } from "@/common/hooks/use-post";
import { PostItem } from "@/common/types/post.type";
import useDebounce, {
  SEARCH_DEBOUNCE_TIMEOUT,
} from "@/common/hooks/use-debounce";

const Classroom = () => {
  const router = useRouter();
  const classroomId = router.query.id as string;

  if (!classroomId) {
    return <pre>Loading...</pre>;
  }

  const [keySearch, setKeySearch] = useState("");
  const debounceKeySearch = useDebounce(keySearch, SEARCH_DEBOUNCE_TIMEOUT);

  const { data: dataPosts, refetch } = usePortsByClassroom({
    classroomId: classroomId,
    keySearch: debounceKeySearch,
  });

  const [postSelected, setPostSelected] = useState<PostItem | null>(null);
  const [selectedPostIndex, setSelectedPostIndex] = useState(0);

  const handleShowPostDetails = (id: string) => {
    const tempPostSelected = dataPosts.find((item: PostItem) => item.id === id);
    const indexPost = dataPosts.findIndex((item: PostItem) => item.id === id);
    setSelectedPostIndex(indexPost);
    setPostSelected(tempPostSelected);
  };

  useEffect(() => {
    if (!dataPosts) return;

    const indexPost = dataPosts.findIndex(
      (item: PostItem) => item.id === postSelected?.id
    );

    if (indexPost >= 0) {
      setSelectedPostIndex(indexPost);
    }

    setPostSelected(dataPosts[indexPost || selectedPostIndex]);
  }, [dataPosts]);

  return (
    <>
      <Card sx={{ height: "100%", p: 3 }}>
        <Grid container spacing={1} sx={{ height: "100%" }}>
          <Grid item xs={12} sx={{ height: "10%" }}>
            <Box sx={{ width: "100%", background: "orange" }}>[Header]</Box>
          </Grid>
          <Grid item xs={4} sx={{ height: "80%" }}>
            <Box
              sx={{
                width: "100%",
                height: "80vh",
              }}
            >
              <LeftClassroom
                selectedPostIndex={selectedPostIndex}
                keySearch={keySearch}
                onSearch={(value) => setKeySearch(value)}
                data={dataPosts}
                onClick={handleShowPostDetails}
                addPostSuccess={() => refetch()}
              />
            </Box>
          </Grid>

          {postSelected && (
            <Grid item xs={8} sx={{ height: "80%" }}>
              <Box sx={{ width: "100%" }}>
                <PostDetails
                  data={postSelected || {}}
                  onUpdatePostSuccess={() => refetch()}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Card>
    </>
  );
};

export default Classroom;
