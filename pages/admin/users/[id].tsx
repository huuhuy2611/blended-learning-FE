import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";
import AdminUserDetails from "@/feat/admin/users/user-details";
import { ReactElement } from "react";

const AdminUserDetailsPage = () => {
  return <AdminUserDetails />;
};

export default AdminUserDetailsPage;

AdminUserDetailsPage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
