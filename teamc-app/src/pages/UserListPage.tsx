import React, { useEffect, useState } from "react";
import UserComponent from "../components/UserComponent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { fetchUsers } from "../service/api/UserAPIClient";

type User = {
  userId: number;
  userName: string;
  status: number;
  tasks: string[];
};

const UserListPage = () => {
  const [users, setUsers] = useState<User[]>([]);

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
    </Container>
  );
};

export default UserListPage;
