import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";

type Props = {};

const Admin = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="admin-sidebar">
        <Sidebar collapsed={collapsed}/>
      </div>
      <div className="admin-content">
        <FaBars onClick={()=>{setCollapsed(!collapsed)}} />
        <p>Content</p>
      </div>
    </div>
  );
};

export default Admin;
