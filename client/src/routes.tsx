import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Layout } from "./pages/Layout";
import { IndexPage } from "./pages/IndexPage";
import { RegisterPage } from "./pages/RegisterPage";

const router = createBrowserRouter([
  { path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: 'login', element: <LoginPage />},
      { path: 'register', element: <RegisterPage />},
    ]
  }
]);

export default router;