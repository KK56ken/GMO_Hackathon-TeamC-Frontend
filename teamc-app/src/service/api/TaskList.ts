import useSWR from "swr";
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

export const GetTaskList = () => {
  const { data, error } = useSWR("/task", fetcher);
  console.log(data);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
