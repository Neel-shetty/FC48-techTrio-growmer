import { api } from ".";
import axios from "axios";

export async function SignIn(email: string, password: string) {
  axios
    .post(
      `https://fc48-techtrio-growmer-production.up.railway.app/login?email=harsh@test.com&password=123456`
    )
    .then((res) => {
      console.log("response -- ", res.data.response());
    })
    .catch((err) => {
      console.log("error --- ", err?.response);
    });
}
