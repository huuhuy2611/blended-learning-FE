import React, { useEffect, useState } from "react";
import { Box, Card, Grid, Paper, styled } from "@mui/material";
import mockComment from "./mock_comments.json";
import LeftClassroom from "./left-classroom";
import PostDetails from "./post-details";
import { useRouter } from "next/router";
import { usePortsByClassroom } from "@/common/hooks/use-post";
import { PostItem } from "@/common/types/post.type";
import useDebounce, {
  SEARCH_DEBOUNCE_TIMEOUT,
} from "@/common/hooks/use-debounce";

const Class = () => {
  const router = useRouter();
  const classroomId = router.query.id as string;

  if (!classroomId) {
    return <pre>Loading...</pre>;
  }

  const [keySearch, setKeySearch] = useState("");
  const debounceKeySearch = useDebounce(keySearch, SEARCH_DEBOUNCE_TIMEOUT);

  const { data: dataPosts } = usePortsByClassroom({
    classroomId: classroomId,
    keySearch: debounceKeySearch,
  });

  const [postSelected, setPostSelected] = useState<PostItem | null>(
    dataPosts?.[0] || null
  );

  const handleShowPostDetails = (id: string) => {
    const tempPostSelected = dataPosts.find((item: PostItem) => item.id === id);
    setPostSelected(tempPostSelected);
  };

  return (
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
            {dataPosts && (
              <LeftClassroom
                keySearch={keySearch}
                onSearch={(value) => setKeySearch(value)}
                data={dataPosts}
                onClick={handleShowPostDetails}
              />
            )}
          </Box>
        </Grid>
        {postSelected && (
          <Grid item xs={8} sx={{ height: "80%" }}>
            <Box sx={{ width: "100%" }}>
              <PostDetails data={postSelected || {}} />
            </Box>
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default Class;
