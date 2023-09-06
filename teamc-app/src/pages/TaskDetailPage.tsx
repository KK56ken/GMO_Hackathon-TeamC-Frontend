import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

type TaskDetailPageProps = {
  title: string;
  userName: string;
  taskDate: Date;
  skillSet: string[];
  concernDesc: string;
  taskDetail: string;
  ticketLink: string;
  slackId: string;
};

const TaskDetailPage = () => {
  const taskDetailPageProps: TaskDetailPageProps = {
    title: "Task 1",
    userName: "User 1",
    taskDate: new Date(),
    skillSet: ["skill 1", "skill 2"],
    concernDesc: "Concern 1",
    taskDetail:
      "こんにちは。私はタスクの詳細です。\nよろしくお願いします。\n\n```ここにコードを書く```\n\n以上です。",
    ticketLink: "https://www.google.com/",
    slackId: "U05QQ2C3B61",
  };

  return (
    <Container>
      {/* TODO: ちゃんと下揃えをしたい */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h2">{taskDetailPageProps.title}</Typography>
        <Typography variant="h5">{taskDetailPageProps.userName}</Typography>
      </div>
      <Typography color="text.secondary" gutterBottom>
        {taskDetailPageProps.taskDate.toLocaleDateString()}
      </Typography>
      <Typography variant="body2">
        {taskDetailPageProps.skillSet.map((skill) => (
          <Chip label={skill} color="primary" />
        ))}
      </Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          color="primary"
          href={taskDetailPageProps.ticketLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          チケットのページへ
        </Button>
        <Button
          variant="contained"
          color="primary"
          href={`slack://user?team=T05JTJTBSTS&id=${taskDetailPageProps.slackId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          このタスクを助ける(DMへ)
        </Button>
      </div>
      {/* ここはmarkdownに対応しても面白いかも */}
      <Typography variant="h5">タスクの詳細</Typography>
      <Typography variant="body2">{taskDetailPageProps.taskDetail}</Typography>
      <Typography variant="h5">気になるところ</Typography>
      <Typography variant="body2">{taskDetailPageProps.concernDesc}</Typography>
    </Container>
  );
};

export default TaskDetailPage;
