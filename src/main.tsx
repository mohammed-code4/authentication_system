import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout/Layout.tsx";
import SignIn from "./pages/SignIn/SignIn.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import Home from "./pages/Home/Home.tsx";
import ProtectRoutes from "./pages/ProtectRoutes/ProtectRoutes.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { ToastContainer } from "react-toastify";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectRoutes>
            <Home />
          </ProtectRoutes>
        ),
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      theme={localStorage.getItem("theme")}
    />
  </Provider>,
);
