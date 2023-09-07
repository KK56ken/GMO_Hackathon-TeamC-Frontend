import useSWR from 'swr'
import React from 'react';

type TaskData = {
  name: string
}

const BASEURL = "http://localhost:8000"

const fetcher = (url: string) => fetch(BASEURL + url).then(res => res.json())

const PostTask = async (data: TaskData) => {
  const response = await fetch(BASEURL + '/api/task', {
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
  const { data, error } = useSWR(`${BASEURL}/api/tasks/${id}`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>Task: {data.name}</div>
}

export default { GetTaskById, PostTask };