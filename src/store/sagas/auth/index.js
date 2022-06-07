import { loginSaga } from "./login";
import { registerSaga } from "./register";

export const authSagas = [loginSaga, registerSaga];
