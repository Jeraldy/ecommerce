import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/admin/pages/Dashboard";
import ListOfUsers from "../components/admin/pages/users/listUsers";

function ProtectedRoutes(){
    return (
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list-of-users" element={<ListOfUsers />} />
        </Routes>
    )
}
export default ProtectedRoutes;