import { api } from ".";

export async function SendMessageToServer(text, uid) {
  api
    .post(
      `https://fc48-techtrio-growmer-production.up.railway.app/recieve?user_id=${uid}&text=${text}`
    )
    .then((response) => {
      console.log("res --- ", response.data);
    })
    .catch((error) => {
      console.log("err ---", error?.response);
    });
}
