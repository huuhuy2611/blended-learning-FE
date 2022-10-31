import useLocalStorage from "@/common/hooks/use-local-storage";
import AuthGuard from "@/common/layouts/AuthGuard";
import LeftSideBar from "@/common/layouts/left-side-bar";
import { redirect } from "@/common/lib/router";
import Home from "@/feat/home";
import { ReactElement, useEffect } from "react";

export default function HomePage() {
  const [userRole, setUserRole] = useLocalStorage("userRole", "");

  useEffect(() => {
    if (userRole === "ADMIN") redirect("/admin/classrooms");
  }, [userRole]);

  return (
    <div>
      <Home />
    </div>
  );
}

HomePage.getLayout = (page: ReactElement) => (
  <AuthGuard>
    <LeftSideBar>{page}</LeftSideBar>
  </AuthGuard>
);
