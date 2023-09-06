import { Button, Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TaskComponent from "../components/TaskComponent";
import { emojis } from "../constants/Emojis";

type UserProfilePageProps = {
  name: string;
  department: string;
  skillSet: string[];
  slackId: string;
  status: number;
  tasks: task[];
};

type task = {
  id: number;
  title: string;
  userName: string;
  skillSet: string[];
  taskDate: Date;
  concernDesc: string;
};

const UserProfilePage = () => {
  const tasks: task[] = [
    {
      id: 1,
      title: "Task 1",
      userName: "User 1",
      skillSet: ["skill 1", "skill 2"],
      taskDate: new Date(),
      concernDesc: "Concern 1",
    },
    {
      id: 2,
      title: "Task 2",
      userName: "User 2",
      skillSet: ["skill 1", "skill 2"],
      taskDate: new Date(),
      concernDesc: "Concern 2",
    },
  ];

  const userProfilePageProps: UserProfilePageProps = {
    name: "User 1",
    department: "Department 1",
    skillSet: ["react", "Docker"],
    slackId: "U05QQ2C3B61",
    status: 2,
    tasks: tasks,
  };
  return (
    <Container>
      <Typography variant="h2">
        {userProfilePageProps.name} {emojis[userProfilePageProps.status]}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href={`slack://user?team=T05JTJTBSTS&id=${userProfilePageProps.slackId}`}
      >
        この人とDMする
      </Button>
      <Typography color="text.secondary" gutterBottom>
        Department: {userProfilePageProps.department}
      </Typography>
      <Typography variant="body2">
        {userProfilePageProps.skillSet.map((skill) => (
          <Chip label={skill} color="primary" />
        ))}
      </Typography>
      <Typography variant="h4">抱えているタスク</Typography>
      <Typography variant="body2">
        <Grid container spacing={2}>
          {userProfilePageProps.tasks.map((task) => (
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
