import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import mockPost from "./mock_posts.json";
import mockComment from "./mock_comments.json";
import LeftClassroom from "./left-classroom";
import PostDetails from "./post-details";

const Class = () => {
  const [postSelected, setPostSelected] = useState<{
    [key: string]: any;
  } | null>(null);

  const handleShowPostDetails = (id: number) => {
    const tempPostSelected = mockPost.find((item) => item.id === id);
    const listComment = mockComment.filter((item) => item.postId === id);
    setPostSelected({ ...tempPostSelected, comments: listComment } || null);
  };

  return (
    <Box sx={{ m: 4, height: "100%" }}>
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
            <LeftClassroom data={mockPost} onClick={handleShowPostDetails} />
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
    </Box>
  );
};

export default Class;
