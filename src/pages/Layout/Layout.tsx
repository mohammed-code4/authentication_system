import Navbar from "@/components/layout/Navbar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.classList.add(theme);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex min-h-[calc(100vh-65px)] items-center justify-center  s">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
