import { api } from ".";
import axios from "axios";

export async function SignIn(email: string, password: string) {
  axios
    .post(
      `https://fc48-techtrio-growmer-production.up.railway.app/login?email=${email}&password=${password}`
    )
    .then((res) => {
      console.log("response -- ", res.data);
    })
    .catch((err) => {
      console.log("error --- ", err);
    });
}
