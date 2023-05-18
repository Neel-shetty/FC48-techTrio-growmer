import axios from "axios";

export async function SignUp(
  email: string,
  password: string,
  name: string,
  phone: string
) {
  axios
    .post(
      `https://fc48-techtrio-growmer-production.up.railway.app/register?email=${email}&password=${password}&name=${name}&phone=${phone}`
    )
    .then(async (res) => {
      console.log("response -- ", res.data);
    })
    .catch((err) => {
      console.log("error --- ", err);
    });
}
