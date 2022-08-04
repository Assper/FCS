import { useEffect } from "react";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

export const Recaptcha = ({ id }) => {
  useEffect(() => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      id,
      {
        size: "invisible",
      },
      auth
    );
  }, [id]);

  return null;
};
