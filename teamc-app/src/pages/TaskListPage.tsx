import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TaskComponent from "../components/TaskComponent";
import { GetTaskList } from "../service/api/TaskList";
import Button from "@mui/material/Button"
import { Link } from "react-router-dom";

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
      <Grid container alignItems="flex-end" spacing={2}>
        <Grid item xs={10}>
          <h1 style={{ lineHeight: 0, marginLeft: 10 }}>TaskListPage</h1>
        </Grid>
        <Grid item xs={2}>
          <Button color="inherit" variant="outlined" sx={{ borderRadius: 4, borderColor: "#AAAAAA"}} component={Link} to="/tasks/create">タスクの追加</Button>
        </Grid>
      </Grid>
      <hr style={{ marginBottom: 30 }}/>
      
      <Grid container spacing={2}>
        {data.length > 0 && data.map((task: any) => (
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
