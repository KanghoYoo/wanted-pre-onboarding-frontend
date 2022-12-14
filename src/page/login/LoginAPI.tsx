import axios from "axios";

export const ID_EXP = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
export const PW_EXP =
  /^[A-Za-z0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,20}$/;

export const signIn = (email: string, password: string) =>
  axios.post(
    `https://pre-onboarding-selection-task.shop/auth/signin/`,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

export const signUp = (email: string, password: string) =>
  axios.post(
    `https://pre-onboarding-selection-task.shop/auth/signup/`,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
