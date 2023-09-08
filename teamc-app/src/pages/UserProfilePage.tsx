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
    <Container sx={{ marginTop: 5}}>
      <Box display="flex" alignItems="flex-end" sx={{ marginBottom: 2}}>
        <Typography variant="h2" marginRight="0px" style={{ lineHeight: 0.75 }}>
          {detailUser.name}
        </Typography>
        <Typography fontSize={70} marginRight="25px" style={{ lineHeight: 0.9 }}>
          {emojis[detailUser.status]}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={`slack://user?team=T05JTJTBSTS&id=${detailUser.slackId}`}
        >
          この人とDMする
        </Button>
      </Box>
      <hr/>
      <Box display="flex" alignItems="flex-end" sx={{ marginBottom: 5 }}>
        <Typography color="text.secondary" gutterBottom sx={{ marginRight: 2 }}>
          Department: {detailUser.department}
        </Typography>
        <SkillSets skillSet={detailUser.skillSet} />
      </Box>
      <Box sx={{ borderLeft: 5, borderColor: "#BBBBBB", marginTop: 2 }}>
        <Typography variant="h4" sx={{ marginLeft: 1 }}>抱えているタスク</Typography>
      </Box>
      <Typography variant="body2">
        <Grid container spacing={2}>
          {detailUser.tasks.map((task) => (
            <Grid item xs={12} sm={6} md={4} key={task.id}>
              <TaskComponent
                id={task.id}
                title={task.title}
                user_name={task.user_name}
                skill_set={task.skill_set}
                task_date={task.task_date}
                concern_desc={task.concern_desc}
              />
            </Grid>
          ))}
        </Grid>
      </Typography>
    </Container>
  );
};

export default UserProfilePage;
