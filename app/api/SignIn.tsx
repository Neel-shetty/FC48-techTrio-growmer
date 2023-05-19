import { api } from ".";
import axios from "axios";
import { signInWithCustomToken } from "firebase/auth";
import auth from "@react-native-firebase/auth";

export async function SignIn(email: string, password: string) {
  axios
    .post(
      `https://fc48-techtrio-growmer-production.up.railway.app/login?email=${email}&password=${password}`
    )
    .then(async (res) => {
      console.log("response -- ", res.data);
      if (res.data?.status === 0) {
        return;
      }
      try {
        const re = await auth().signInWithCustomToken(res.data?.authToken);
        console.log("🚀 ~ file: SignIn.tsx:14 ~ .then ~ re:", re);
      } catch (e) {
        console.log("error in fb  --- ", e);
      }
    })
    .catch((err) => {
      console.log("error --- ", err);
    });
}
