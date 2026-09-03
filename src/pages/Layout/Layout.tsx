import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
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
