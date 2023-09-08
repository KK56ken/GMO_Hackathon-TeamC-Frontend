import useSWR from 'swr'
import { TaskData } from '../../types/TaskData';
import Cookies from "js-cookie";

const BASEURL = "http://localhost:8000";

const fetcher = (url: string) => {
  const token = Cookies.get("access_token");
  return fetch(BASEURL + url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((res) => res.json());
};

export const PostTask = async (data: TaskData) => {
  const token = Cookies.get("access_token");
  if (token) {
    const response = await fetch(BASEURL + '/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } else {
    throw new Error("token is not found");
  }
}


export const GetTaskById = (id: number) => {
  const { data, error } = useSWR(`/task/${id}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};