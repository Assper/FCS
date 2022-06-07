import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { Login, Register } from "./features/auth";
import { Profile } from "./features/profile";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect to="auth" />} />
        <Route path="/auth" element={<Login />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/pofile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
