import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";
import AdminReports from "@/feat/admin/reports";
import { ReactElement } from "react";

const AdminReportsPage = () => {
  return <AdminReports />;
};

export default AdminReportsPage;

AdminReportsPage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
