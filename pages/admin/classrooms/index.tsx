import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";
import AdminClassrooms from "@/feat/admin/classrooms";
import React, { ReactElement } from "react";

const AdminClassroomsPage = () => {
  return <AdminClassrooms />;
};

export default AdminClassroomsPage;

AdminClassroomsPage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
