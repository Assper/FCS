import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./features/profile/Profile";
import { Auth } from "./features/auth/Auth";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};
