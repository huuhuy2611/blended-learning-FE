import React, { useEffect } from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import mockPost from "./mock_posts.json";
import LeftClass from "./left-class";

const Class = () => {
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
              overflow: "auto",
            }}
          >
            <LeftClass data={mockPost} />
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ height: "80%" }}>
          <Box sx={{ width: "100%", background: "lightblue" }}>
            [Post details]
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Class;
