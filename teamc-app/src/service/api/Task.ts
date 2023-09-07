import useSWR from 'swr'
import { TaskData } from '../../types/TaskData';

const BASEURL = "http://localhost:8000"

const fetcher = (url: string) => fetch(BASEURL + url).then(res => res.json())

const PostTask = async (data: TaskData) => {
  const response = await fetch(BASEURL + '/task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

const GetTaskById = ({ id } : { id: string | number } ) => {
  const { data, error } = useSWR(`${BASEURL}/tasks/${id}`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default { GetTaskById, PostTask };