import React from "react";
import UserComponent from "../components/UserComponent";
import Grid from "@mui/material/Grid";

const users = [
  {
    userId: 1,
    userName: "user1",
    status: 0,
    tasks: ["task1", "task2", "task3"],
  },
  {
    userId: 2,
    userName: "user2",
    status: 1,
    tasks: ["task4", "task5", "task6"],
  },
  {
    userId: 3,
    userName: "user3",
    status: 2,
    tasks: ["task7", "task8", "task9"],
  },
  {
    userId: 4,
    userName: "user4",
    status: 0,
    tasks: [],
  },
  {
    userId: 5,
    userName: "user5",
    status: 2,
    tasks: ["task14", "task25", "task36"],
  },
];

const UserListPage = () => {
  return (
    <div>
      <h1>ユーザー一覧</h1>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.userId}>
            <UserComponent
              userId={user.userId}
              userName={user.userName}
              status={user.status}
              tasks={user.tasks}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserListPage;
