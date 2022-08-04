import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { verificationIdSelector } from "../../../store/selectors";

export const ConfirmGuard = ({ children }) => {
  const verificationId = useSelector(verificationIdSelector);

  if (verificationId) return <Navigate to="/auth/confirm" />;
  return children;
};
