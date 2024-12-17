import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import ManagerUser from "./components/Admin/Content/ManagerUser";
import Dashboard from "./components/Admin/Content/DashBoar";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "user",
          element: <User />,
        },
      ],
    },
    {
      path: "admin",
      element: <Admin />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "manageuser",
          element: <ManagerUser />,
        }
        
      ],
    },
  ]);

  return routes;
};

export default App;
