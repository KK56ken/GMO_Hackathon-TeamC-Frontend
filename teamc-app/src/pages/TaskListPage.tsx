import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TaskComponent from "../components/TaskComponent";
import { GetTaskList } from '../service/api/TaskList'

const tasks = [
  {
    task_id: 1,
    title: "Reactわからん",
    user_name: "細谷",
    skill_set: ["React", "Docker"],
    task_date: new Date(),
    concern_desc: "piyopiyo",
  },
  {
    id: 2,
    title: "Reactわかった",
    user_name: "piyo",
    skill_set: ["Next.js", "TypeScript"],
    task_date: new Date(),
    concern_desc: "hogehoge",
  },
];

const TaskListPage = () => {

  const { data, isLoading, isError } = GetTaskList()
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading tasks</div>;
  }

  if (!data) {
    return <div>No tasks available</div>;
  }
  return (
    <Container>
      <h1>TaskListPage</h1>
      <Grid container spacing={2}>
        {tasks.map((task: any) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <TaskComponent
              id={task.task_id}
              title={task.title}
              userName={task.user_name}
              skillSet={task.skill_set}
              taskDate={task.task_date}
              concernDesc={task.concern_desc}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TaskListPage;
