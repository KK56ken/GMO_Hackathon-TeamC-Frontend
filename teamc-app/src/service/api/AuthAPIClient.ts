import { AuthUser } from "../../types/AuthUser";
import { SignUpUser } from "../../types/SignUpUser";

const baseURL = "http://localhost:8000";

export const PostSignupData = async (data: SignUpUser) => {
  try {
    const response = await fetch(`${baseURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} - ${response.statusText}`
      );
    }

    const res = await response.json();
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const PostLoginData = async (data: AuthUser) => {
  try {
    const response = await fetch(`${baseURL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "username=" + data.username + "&password=" + data.password,
    });

    console.log(response);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} - ${response.statusText}`
      );
    }

    const res = await response.json();
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
