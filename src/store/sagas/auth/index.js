import { loginSaga } from "./login";
import { confirmSaga } from "./confirm";
import { logoutSaga } from "./logout";

export const authSagas = [loginSaga, confirmSaga, logoutSaga];
