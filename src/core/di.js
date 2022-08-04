import { config } from "../config";
import { AuthService } from "./services/AuthService";
import { FirebaseService } from "./services/FirebaseService";
import { StorageService } from "./services/StorageService";

const firebase = new FirebaseService(config.firebase);
const storage = new StorageService();
const auth = new AuthService(storage);

export const DI = Object.freeze({
  config,
  service: {
    firebase,
    auth,
    storage,
  },
});
