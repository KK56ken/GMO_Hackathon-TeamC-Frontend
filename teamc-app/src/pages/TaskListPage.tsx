import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TaskComponent from "../components/TaskComponent";
import { GetTaskList } from "../service/api/TaskList";

const TaskListPage = () => {
  const { data, isLoading, isError } = GetTaskList();
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
        {data.map((task: any) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <TaskComponent
              id={task.task_id}
              title={task.title}
              user_name={task.user_name}
              skill_set={task.skill_set}
              task_date={task.task_date}
              concern_desc={task.concern_desc}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TaskListPage;
