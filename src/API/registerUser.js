import axios from "axios";

export async function registerUser(email, password) {
  const api = `https://ee94f4carh.execute-api.ap-southeast-2.amazonaws.com/s1/register?username=${encodeURIComponent(
    email
  )}&password=${encodeURIComponent(password)}`;
  const data = {};
  await axios
    .get(api, data)
    .then((response) => {
      console.log("Outcome:", response.data[2]);
      if (response.data[2]) {
        console.log("OUTCOME:", response.data[2]);
        window.location = "/main";
      } else {
        console.log("OUTCOME:", response.data[2]);
        window.location = "/register";
      }
    })
    .catch((error) => {
      console.log("Error");
      console.log(error);
    });
  return false;
}
