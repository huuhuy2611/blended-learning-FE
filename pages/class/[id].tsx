import React, { ReactElement } from "react";
import Class from "@/feat/class";
import { Box } from "@mui/material";
import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";

const ClassPage = () => {
  return (
    <Box>
      <Class />
    </Box>
  );
};

export default ClassPage;

ClassPage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
