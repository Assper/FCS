import { config } from "../config";
import { AuthService } from "./services/AuthService";
import { FirebaseService } from "./services/FirebaseService";

export const DI = Object.freeze({
  config,
  services: {
    firebase: new FirebaseService(config.firebase),
    auth: new AuthService(),
  },
});
