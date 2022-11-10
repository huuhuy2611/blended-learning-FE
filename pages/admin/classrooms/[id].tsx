import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";
import AdminClassroomDetails from "@/feat/admin/classrooms/classroom-details";
import React, { ReactElement } from "react";

const AdminClassroomDetailsPage = () => {
  return <AdminClassroomDetails />;
};

export default AdminClassroomDetailsPage;

AdminClassroomDetailsPage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
