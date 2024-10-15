import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTI0NTc3OWMxNmY4NTcwMTM1N2Y0N2Y0NTA1NTlmZSIsIm5iZiI6MTcyNTM3NTA5NC40MTA5MDMsInN1YiI6IjY2ZDcxYWFlOGIxNDYzYzc1M2Y3MTI1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HCmfUNj9TPjmcbgSQR6gxLTJvM-GmrPGASu9aLVHHW4";

export default async function fetchData(page = 1, query = "", endPoint) {
  const params = {
    page,
    query,
    api_key: "ea245779c16f85701357f47f450559fe",
  };
  const respons = await axios.get(`${endPoint}`, { params });

  return respons.data;
}
