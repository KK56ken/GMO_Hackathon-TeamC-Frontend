import useSWR from 'swr'
import { TaskData } from '../../types/TaskData';
import Cookies from "js-cookie";

const BASEURL = "http://localhost:8000"

const fetcher = (url: string) => fetch(BASEURL + url).then(res => res.json())

const PostTask = async (data: TaskData) => {
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

const GetTaskById = ({ id } : { id: string | number } ) => {
  const { data, error } = useSWR(`${BASEURL}/tasks/${id}`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export { GetTaskById, PostTask };