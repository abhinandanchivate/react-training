import React from "react";
import { Route, Routes } from "react-router-dom";
import CoreRouter from "../core/routers/CoreRouter";
import AuthRouter from "../auth/routers/AuthRouter";
import DashboardRouters from "../dashboard/routers/dashboardRouters";
const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoreRouter />} />
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/dashboard/*" element={<DashboardRouters />} />
      </Routes>
    </>
  );
};

export default index;
