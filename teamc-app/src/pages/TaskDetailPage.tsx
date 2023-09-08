import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SkillSets from "../components/SkillSets";
import Box from "@mui/material/Box";
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
    return (
      <Container sx={{ marginTop: 5 }}>
        {/* TODO: ちゃんと下揃えをしたい */}
        <div
          style={{ display: "flex", alignItems: "flex-end", marginBottom: 2 }}
        >
          <Typography
            variant="h2"
            sx={{ marginRight: 3 }}
            style={{ lineHeight: 0.75 }}
          >
            {data.title}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={`slack://user?team=T05JTJTBSTS&id=${data.slack_id}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ marginRight: 1 }}
          >
            このタスクを助ける(DMへ)
          </Button>
          <Button variant="text" color="primary">
            このタスクは解決した
          </Button>
        </div>
        <Typography color="text.secondary" gutterBottom sx={{ marginTop: 1 }}>
          {data.user_name}, {new Date(data.task_date).toLocaleDateString()}
        </Typography>
        <hr />
        <SkillSets skillSet={data.skill_set} />
        <Card
          elevation={0}
          sx={{
            border: 1,
            borderColor: "#DDDDDD",
            borderRadius: 1,
            marginTop: 1,
            padding: 2,
          }}
        >
          <div
            style={{ display: "flex", alignItems: "flex-end", marginBottom: 2 }}
          >
            <Box
              sx={{
                borderLeft: 5,
                paddingTop: 1,
                paddingBottom: 1,
                borderColor: "#BBBBBB",
              }}
            >
              <Typography
                variant="h5"
                sx={{ marginRight: 3, marginLeft: 1 }}
                style={{ lineHeight: 0.5 }}
              >
                タスクの詳細
              </Typography>
            </Box>
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
          <Typography variant="body2" sx={{ marginTop: 2, marginBottom: 2 }}>
            {data.task_detail}
          </Typography>
          <hr />
          <Box sx={{ height: 20 }} />
          <Box
            sx={{
              borderLeft: 5,
              paddingTop: 1,
              paddingBottom: 1,
              borderColor: "#BBBBBB",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginRight: 3, marginLeft: 1 }}
              style={{ lineHeight: 0.5 }}
            >
              気になるところ
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            {data.concern_desc}
          </Typography>
        </Card>
      </Container>
    );
  }
};

export default TaskDetailPage;
