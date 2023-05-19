import { api } from ".";

export async function SendMessageToServer(text, uid) {
  api
    .post(
      `https://fc48-techtrio-growmer-production.up.railway.app/recieve?user_id=1&text=hello i are a code boy`
    )
    .then((response) => {
      console.log("res --- ",response);
    })
    .catch((error) => {
      console.log("err ---",error?.response);
    });
}
