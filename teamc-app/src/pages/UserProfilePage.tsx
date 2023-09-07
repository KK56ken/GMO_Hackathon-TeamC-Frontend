import { Box, Button, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TaskComponent from "../components/TaskComponent";
import { emojis } from "../constants/Emojis";
import SkillSets from "../components/SkillSets";
import { useEffect, useState } from "react";
import { fetchUserInfo } from "../service/api/UserAPIClient";
import { DetailUser } from "../types/DetailUser";
import { useParams } from "react-router-dom";

const UserProfilePage = () => {
  const [detailUser, setDetailUser] = useState<DetailUser | null>(null);
  const urlParams = useParams<{ id: string }>();

  useEffect(() => {
    const getUserDetail = async () => {
      const id = Number(urlParams.id);
      const response: DetailUser | null = await fetchUserInfo(id);
      if (response != null) {
        setDetailUser(response);
      }
    };
    getUserDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return detailUser == null ? (
    <></>
  ) : (
    <Container>
      <Box display="flex" alignItems="center">
        <Typography variant="h2" marginRight="16px">
          {detailUser.name} {emojis[detailUser.status]}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={`slack://user?team=T05JTJTBSTS&id=${detailUser.slackId}`}
        >
          この人とDMする
        </Button>
      </Box>
      <Typography color="text.secondary" gutterBottom>
        Department: {detailUser.department}
      </Typography>
      <SkillSets skillSet={detailUser.skillSet} />
      <Typography variant="h4">抱えているタスク</Typography>
      <Typography variant="body2">
        <Grid container spacing={2}>
          {detailUser.tasks.map((task) => (
            <Grid item xs={12} sm={6} md={4} key={task.id}>
              <TaskComponent
                id={task.id}
                title={task.title}
                userName={task.userName}
                skillSet={task.skillSet}
                taskDate={task.taskDate}
                concernDesc={task.concernDesc}
              />
            </Grid>
          ))}
        </Grid>
      </Typography>
    </Container>
  );
};

export default UserProfilePage;
