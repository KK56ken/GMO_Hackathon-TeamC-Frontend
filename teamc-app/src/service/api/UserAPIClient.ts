import Cookies from "js-cookie";
import { AbstractTask } from "../../types/AbstractTask";
import { AbstractUser } from "../../types/AbstractUser";
import { DetailUser } from "../../types/DetailUser";
import { UpdateUser } from "../../types/UpdateUser";

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
        slackId: data.slack_id,
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

// /profile/myprofile にpostして、自分の情報を取得する
export const fetchMyInfo = async () => {
  try {
    const token = Cookies.get("access_token");
    if (token) {
      const response = await fetch(`${baseURL}/profile/myprofile`, {
        method: "POST",
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
      const skillSetIds = data.skill_set.map((skill: any) => skill.skill_id);
      const skillSetNames = data.skill_set.map(
        (skill: any) => skill.skill_name
      );
      const detailUser: DetailUser = {
        department: data.department.department_name,
        name: data.name,
        skillSet: skillSetNames,
        slackId: data.slack_id,
        status: data.status,
        tasks: data.tasks as AbstractTask[],
      };
      const updateUser: UpdateUser = {
        id: data.user_id,
        user_name: data.name,
        department_id: data.department.department_id,
        skill_set: skillSetIds,
        slack_id: data.slack_id,
        status: data.status,
      };
      return { detailUser, updateUser };
    } else {
      throw new Error("token is not found");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const UpdateUserData = async (data: UpdateUser) => {
  try {
    const token = Cookies.get("access_token");
    if (token) {
      const response = await fetch(`${baseURL}/profile/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} - ${response.statusText}`
        );
      }

      const res = await response.json();
      return res;
    } else {
      throw new Error("token is not found");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
