import axios from "axios";

export async function validateLogin(email, password) {
  const api = `https://ee94f4carh.execute-api.ap-southeast-2.amazonaws.com/s1/login?username=${encodeURIComponent(
    email
  )}&password=${encodeURIComponent(password)}`;
  const data = {};
  await axios
    .get(api, data)
    .then((response) => {
      if (response.data[2]) {
        window.location = `/main?username=${response.data[0]}`;
      } else {
        window.location = "/";
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return false;
}
