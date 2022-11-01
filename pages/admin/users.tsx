import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";
import AdminUsers from "@/feat/admin/users";
import React, { ReactElement } from "react";

const UsersPage = () => {
  return <AdminUsers />;
};

export default UsersPage;

UsersPage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
