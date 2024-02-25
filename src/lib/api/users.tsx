import axios from "axios";
import { User } from "../../routes/nonLogin/nonLoginLogIn";

const BASE_URL = "/api/users";
const instance = axios.create({
  baseURL: BASE_URL,
});

export async function login(data: User) {
  return await instance.post("/login", data);
}

export async function logout() {
  return await instance.post("/logout");
}

export async function setPassWord() {
  return await instance.put("/setpassword");
}

export async function authEmail() {
  return await instance.get("/:email");
}
