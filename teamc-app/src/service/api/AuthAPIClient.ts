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
