import Cookies from "js-cookie";
import { AbstractTask } from "../../types/AbstractTask";
import { AbstractUser } from "../../types/AbstractUser";
import { DetailUser } from "../../types/DetailUser";

const baseURL = "http://localhost:8000";

export const fetchUsers = async (): Promise<AbstractUser[] | null> => {
  try {
    const token = Cookies.get("access_token");
    if (token) {
      const response = await fetch(`${baseURL}/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();
      return data as AbstractUser[];
    } else {
      throw new Error("token is not found");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchUserInfo = async (id: number) => {
  try {
    const token = Cookies.get("access_token");
    if (token) {
      const response = await fetch(`${baseURL}/profile/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();
      const detailUser: DetailUser = {
        department: data.department,
        name: data.name,
        skillSet: data.skill_set,
        slackId: data.slackId,
        status: data.status,
        tasks: data.tasks as AbstractTask[],
      };
      return detailUser;
    } else {
      throw new Error("token is not found");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
