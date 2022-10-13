import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";
import { ReactElement } from "react";

export default function HomePage() {
  return <div>[Home]</div>;
}

HomePage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
