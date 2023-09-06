// http://localhost:8000をベースURLとする
const baseURL = "http://localhost:8000";

// baseURLにGETリクエストを送り、レスポンスをconsole.logする関数
export const getStatus = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  console.log(data);
};

// /profile/:idにGETリクエストを送り、レスポンスをconsole.logする関数
export const getUser = async (id: number) => {
  const response = await fetch(`${baseURL}/profile/${id}`);
  const data = await response.json();
  return data;
};
