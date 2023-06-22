import { getAuth, signOut, signInWithPhoneNumber } from "firebase/auth";

export class AuthService {
  constructor(storage) {
    this.storage = storage;
  }

  async login(phoneNumber) {
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    this.storage.setConfirmation(confirmationResult);
    return confirmationResult;
  }

  async confirm(code) {
    const confirmationResult = this.storage.getConfirmation();
    const result = await confirmationResult.confirm(code);
    this.storage.clearConfirmation();
    return result;
  }

  logout() {
    const auth = getAuth();
    return signOut(auth);
  }
}
