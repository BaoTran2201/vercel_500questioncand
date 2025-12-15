
  import { createRoot } from "react-dom/client";
  import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
  import App from "./App.tsx";
  import LoginPage from "./components/LoginPage";
  import "./index.css";

  const ProtectedApp = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    return isAuthenticated ? <App /> : <Navigate to="/" replace />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/app",
      element: <ProtectedApp />,
    },
  ]);

  createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
  