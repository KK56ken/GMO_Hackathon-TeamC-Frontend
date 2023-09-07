import useSWR from 'swr'

const BASEURL = "http://localhost:8000"
const fetcher = (url: string) => fetch(BASEURL + url).then(res => res.json())

export const GetTaskList = () => {
  const { data, error } = useSWR('/task', fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

// export default GetTaskList;