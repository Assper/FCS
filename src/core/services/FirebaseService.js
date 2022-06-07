import { initializeApp } from "firebase/app";

export class FirebaseService {
  constructor(config) {
    this.app = initializeApp(config);
  }
}
