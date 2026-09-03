import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ children }) => {
  const { token } = useSelector((state: RootState) => {
    return state.auth;
  });

  if (!token) {
    return <Navigate to={"/sign-in"} />;
  }

  return children;
};

export default ProtectRoutes;
