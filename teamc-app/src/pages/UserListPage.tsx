import React, { useEffect, useState } from "react";
import UserComponent from "../components/UserComponent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { fetchUsers } from "../service/api/UserAPIClient";
import { AbstractUser } from "../types/AbstractUser";

const UserListPage = () => {
  const [users, setUsers] = useState<AbstractUser[]>([]);

  useEffect(() => {
    async function getUsers() {
      const usersResponse = await fetchUsers();
      if (usersResponse != null) {
        setUsers(usersResponse);
      }
    }

    // localstrageにtokenがあるかどうかlogに出力
    console.log(localStorage.getItem("token"));
    getUsers();
  }, []);

  return (
    <Container>
      <h1>ユーザー一覧</h1>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.user_id}>
            <UserComponent
              user_id={user.user_id}
              user_name={user.user_name}
              status={user.status}
              tasks={user.tasks}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserListPage;
