const baseURL = "http://localhost:8000";

type User = {
  userId: number;
  userName: string;
  status: number;
  tasks: string[];
};

export const fetchUsers = async (): Promise<User[] | null> => {
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
      return data.users as User[];
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUser = async (id: number) => {
  const response = await fetch(`${baseURL}/profile/${id}`);
  const data = await response.json();
  return data;
};
