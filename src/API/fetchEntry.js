import axios from "axios";

export async function fetchEntry(email, date) {
  const api = `https://ee94f4carh.execute-api.ap-southeast-2.amazonaws.com/s1/fetchEntry?username=${encodeURIComponent(
    email
  )}&date=${encodeURIComponent(date)}`;
  //   const api = `https://ee94f4carh.execute-api.ap-southeast-2.amazonaws.com/s1/fetchEntry?username=chandu&date=28-05-2021`;
  const data = {};
  let res = "Empty";
  await axios
    .get(api, data)
    .then((response) => {
      console.log("Outcome:", response.data);
      res = response.data;
    })
    .catch((error) => {
      console.log("Error");
      console.log(error);
      return "error";
    });
  return res;
}
