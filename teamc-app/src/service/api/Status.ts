import useSWR from 'swr'
import Cookies from "js-cookie";
import { Status } from "../../types/Status"

const BASEURL = "http://localhost:8000"

export const PutStatus = async (id: number, data: Status) => {
  const token = Cookies.get("access_token");
  const response = await fetch(BASEURL + `/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};