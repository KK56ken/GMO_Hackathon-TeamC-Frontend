import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SkillSets from "../components/SkillSets";
import { useParams } from "react-router-dom";
import { GetTaskById } from "../service/api/Task";

const TaskDetailPage = () => {
  const urlParams = useParams<{ id: string }>();
  if (urlParams.id === undefined) {
    return <div>URLが不正です</div>;
  } else {
    const { data, isLoading, isError } = GetTaskById(Number(urlParams.id));

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error loading tasks</div>;
    }

    if (!data) {
      return <div>No tasks available</div>;
    }

    console.log(data);
    return (
      <Container>
        {/* TODO: ちゃんと下揃えをしたい */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h2">{data.title}</Typography>
          <Button
            variant="contained"
            color="primary"
            href={`slack://user?team=T05JTJTBSTS&id=${data.slack_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            このタスクを助ける(DMへ)
          </Button>
          <Button variant="text" color="primary">
            このタスクは解決した
          </Button>
        </div>
        <Typography color="text.secondary" gutterBottom>
          {data.user_name}, {new Date(data.task_date).toLocaleDateString()}
        </Typography>
        <SkillSets skillSet={data.skill_set} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5" marginTop="10px">
            タスクの詳細
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={data.ticket_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            チケットのページへ
          </Button>
        </div>
        {/* ここはmarkdownに対応しても面白いかも */}
        <Typography variant="body2">{data.task_detail}</Typography>
        <Typography variant="h5" marginTop="10px">
          気になるところ
        </Typography>
        <Typography variant="body2">{data.concern_desc}</Typography>
      </Container>
    );
  }
};

export default TaskDetailPage;
