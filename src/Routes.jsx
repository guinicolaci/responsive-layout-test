import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;