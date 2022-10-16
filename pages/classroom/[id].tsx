import React, { ReactElement } from "react";
import Classroom from "@/feat/class";
import { Box } from "@mui/material";
import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";

const ClassroomPage = () => {
  return (
    <Box>
      <Classroom />
    </Box>
  );
};

export default ClassroomPage;

ClassroomPage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
