import { AbstractTask } from "../../types/AbstractTask";
import { AbstractUser } from "../../types/AbstractUser";
import { DetailUser } from "../../types/DetailUser";

const baseURL = "http://localhost:8000";

export const fetchUsers = async (): Promise<AbstractUser[] | null> => {
  try {
    const response = await fetch(`${baseURL}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    if (Array.isArray(data.users)) {
      return data.users as AbstractUser[];
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchUserInfo = async (id: number) => {
  try {
    const response = await fetch(`${baseURL}/profile/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
  } catch (error) {
    console.error(error);
    return null;
  }
};
