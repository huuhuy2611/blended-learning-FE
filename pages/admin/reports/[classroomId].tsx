import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";
import AdminReports from "@/feat/admin/reports";
import AdminReportByClassroom from "@/feat/admin/reports/report-by-classroom";
import { ReactElement } from "react";

const AdminReportsByClassroomPage = () => {
  return <AdminReportByClassroom />;
};

export default AdminReportsByClassroomPage;

AdminReportsByClassroomPage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
