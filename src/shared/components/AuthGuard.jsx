import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector, verificationIdSelector } from "../../store/selectors";

export const AuthGuard = ({ children }) => {
  const user = useSelector(userSelector);
  const verificationId = useSelector(verificationIdSelector);

  if (!user && verificationId) return <Navigate to="/auth/confirm" />;
  if (!user && !verificationId) return <Navigate to="/auth/login" />;
  return children;
};
