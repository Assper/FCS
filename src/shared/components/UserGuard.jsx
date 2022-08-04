import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/selectors";

export const UserGuard = ({ children }) => {
  const user = useSelector(userSelector);

  if (user) return <Navigate to="/profile" />;
  return children;
};
