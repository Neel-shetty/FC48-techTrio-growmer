import { api } from ".";

export async function GetLeaderBoard() {
  api
    .get("/user_sort")
    .then((response) => {
      console.log("res --- ", response.data?.users);
      return response.data?.users;
    })
    .catch((error) => {
      console.log("err ---", error?.response);
    });
}
