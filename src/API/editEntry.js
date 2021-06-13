import axios from "axios";

export async function editEntry(email, date, entryText) {
  const api = `https://ee94f4carh.execute-api.ap-southeast-2.amazonaws.com/s1/fetchEntry?username=${encodeURIComponent(
    email
  )}&date=${date}&entryText=${encodeURIComponent(entryText)}`;
  const data = {};
  let res = false;
  await axios
    .put(api, data)
    .then((response) => {
      console.log("Outcome for put:", response);
      res = response.data;
    })
    .catch((error) => {
      console.log("Error");
      console.log(error);
      return "error";
    });
  return res;
}
