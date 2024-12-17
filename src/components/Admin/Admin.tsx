import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";

type Props = {};

const Admin = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="admin-sidebar">
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="admin-content w-full">
        <div className="admin-header border-2 border-sky-500">
          <FaBars
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          />
        </div>
        <div className="admin-main border-2 border-red-500">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Admin;
