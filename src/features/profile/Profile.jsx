import React from "react";
import { AuthGuard } from "../../shared/components/AuthGuard";

export const Profile = () => {
  return (
    <AuthGuard>
      <div>Profile</div>
    </AuthGuard>
  );
};
