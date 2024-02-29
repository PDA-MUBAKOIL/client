import { mailInstance } from "./api";

export async function sendEmailAuthNumber(mail: string) {
  return await mailInstance.post("/send", {
    mail,
  });
}

export async function confirmAuthNumber(authcode: string) {
  return await mailInstance.post("/cert", {
    authcode: authcode,
  });
}