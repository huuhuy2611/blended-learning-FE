import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";
import AdminUsers from "@/feat/admin/users";
import React, { ReactElement } from "react";

const AdminUsersPage = () => {
  return <AdminUsers />;
};

export default AdminUsersPage;

AdminUsersPage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
