import axios from "axios";

function clovaApi(file) {
  const url = `/api?lang=Kor`;
  const requestConfig = {
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      "X-NCP-APIGW-API-KEY-ID": "uon8a707l4",
      "X-NCP-APIGW-API-KEY": "ir6kzkuGvndhvLcYGvPVWWLkyklscnhvoxBoBRJz",
    },
    body: file,
  };
  axios(requestConfig)
    .then((res) => console.log(res.json()))
    .catch((err) => console.log(err));
}

export default clovaApi;
