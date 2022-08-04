import { Button, Grid, Input } from "@mui/material";
import { Container } from "@mui/system";
import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { Recaptcha } from "../../../shared/components/Recaptcha";
import { loginReq } from "../../../store/reducers/auth";
import { ConfirmGuard } from "../components/ConfirmGuard";

export const Login = () => {
  const phone = useRef(null);
  const dispatch = useDispatch();

  const handleLogin = useCallback(() => {
    if (phone.current) {
      dispatch(loginReq(phone.current.value));
    }
  }, [phone, dispatch]);

  return (
    <ConfirmGuard>
      <Container>
        <Grid>
          <Input type="phone" inputRef={phone} />
          <Button id="login-button" onClick={handleLogin}>
            Login
          </Button>
        </Grid>
        <Recaptcha id="login-button" />
      </Container>
    </ConfirmGuard>
  );
};
