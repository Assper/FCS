import { Container } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router";
import { UserGuard } from "../../shared/components/UserGuard";
import { Confirm } from "./containers/Confirm";
import { Login } from "./containers/Login";

export const Auth = () => {
  return (
    <UserGuard>
      <Container>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="confirm" element={<Confirm />} />
        </Routes>
      </Container>
    </UserGuard>
  );
};
