import axios from "axios";

const BASE_URL = "http://localhost:4900/api/";
 const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODhjZTFkMTI2M2Y4YjE0MTYyNzk4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzIyMjA4MSwiZXhwIjoxNjUzNDgxMjgxfQ.BqISp7UkY35MYMy1pwyUkslPV1u4-Xbqfji7JMasjaE"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});