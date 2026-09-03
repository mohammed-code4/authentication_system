import type { RootState } from "@/store";
import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ children }: { children: ReactNode }) => {
  const { token } = useSelector((state: RootState) => {
    return state.auth;
  });

  if (!token) {
    return <Navigate to={"/sign-in"} />;
  }

  return children;
};

export default ProtectRoutes;
