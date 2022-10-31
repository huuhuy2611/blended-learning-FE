import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";
import AdminClassrooms from "@/feat/admin/classrooms";
import React, { ReactElement } from "react";

const ClassroomsPage = () => {
  return <AdminClassrooms />;
};

export default ClassroomsPage;

ClassroomsPage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
