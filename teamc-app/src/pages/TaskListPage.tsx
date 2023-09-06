import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TaskComponent from "../components/TaskComponent";

const tasks = [
  {
    id: 1,
    title: "Reactわからん",
    userName: "細谷",
    skillSet: ["React", "Docker"],
    taskDate: new Date(),
    concernDesc: "piyopiyo",
  },
  {
    id: 2,
    title: "Reactわかった",
    userName: "piyo",
    skillSet: ["Next.js", "TypeScript"],
    taskDate: new Date(),
    concernDesc: "hogehoge",
  },
];

const TaskListPage = () => {
  return (
    <Container>
      <h1>TaskListPage</h1>
      <Grid container spacing={2}>
        {tasks.map((task) => (
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
    </Container>
  );
};

export default TaskListPage;
