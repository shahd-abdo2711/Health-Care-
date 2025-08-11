import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./Firebase.config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
export default app;
