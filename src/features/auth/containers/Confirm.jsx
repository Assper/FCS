import { Button, Grid, Input } from "@mui/material";
import { Container } from "@mui/system";
import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { confrimReq } from "../../../store/reducers/auth";

export const Confirm = () => {
  const code = useRef(null);
  const dispatch = useDispatch();

  const handleConfirm = useCallback(() => {
    if (code.current) {
      dispatch(confrimReq(code.current.value));
    }
  }, [code, dispatch]);

  return (
    <Container>
      <Grid>
        <Input type="text" inputRef={code} />
        <Button id="confirm-button" onClick={handleConfirm}>
          Confirm
        </Button>
      </Grid>
    </Container>
  );
};
