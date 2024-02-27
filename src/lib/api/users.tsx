import { User } from "../../routes/nonLogin/nonLoginLogIn";
import { userInstance } from "./api";

export async function signup(data: User) {
  return await userInstance.post("/signup", data);
}

export async function login(data: User) {
  return await userInstance.post("/login", data);
}

export async function logout(token: string) {
  return await userInstance.post("/logout", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export async function setPassWord() {
  return await userInstance.put("/setpassword");
}

export async function authEmail() {
  return await userInstance.get("/:email");
}
