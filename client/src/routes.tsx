import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { Layout } from "./pages/Layout";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AccountPage } from "./pages/AccountPage";
import { PrivateRoutes } from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      {
        element: <PrivateRoutes />,
        children: [
          { path: "account/:subpage?", element: <AccountPage /> },
          { path: "account/:subpage/:action", element: <AccountPage />},
        ],
      },
    ],
  },
]);

export default router;
