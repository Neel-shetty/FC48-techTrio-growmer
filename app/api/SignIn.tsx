import { api } from ".";
import axios from "axios";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export async function SignIn(email: string, password: string) {
  axios
    .post(
      `https://fc48-techtrio-growmer-production.up.railway.app/login?email=${email}&password=${password}`
    )
    .then(async (res) => {
      console.log("response -- ", res.data.authtoken);
      const idk = await signInWithCustomToken(auth, res.data.token);
      console.log("🚀 ~ file: SignIn.tsx:14 ~ .then ~ idk:", idk);
    })
    .catch((err) => {
      console.log("error --- ", err);
    });
}
