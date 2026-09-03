import Navbar from "@/components/layout/Navbar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  useEffect(() => {
    document.documentElement.classList.add(localStorage.getItem("theme"));
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
