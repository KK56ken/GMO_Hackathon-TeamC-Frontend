import React, { useEffect, useState } from "react";
import UserComponent from "../components/UserComponent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { fetchUsers } from "../service/api/UserAPIClient";
import { AbstractUser } from "../types/AbstractUser";
import { Box } from "@mui/system";

const UserListPage = () => {
  const [users, setUsers] = useState<AbstractUser[]>([]);

  useEffect(() => {
    async function getUsers() {
      const usersResponse = await fetchUsers();
      if (usersResponse != null) {
        setUsers(usersResponse);
      }
    }
    getUsers();
  }, []);

  return (
    <Container>
      <h1 style={{ marginTop: 30, marginBottom: 0, marginLeft:10 }}>ユーザー一覧</h1>
      <hr style={{ marginBottom: 30 }}/>
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
