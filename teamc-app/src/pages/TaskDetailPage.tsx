import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SkillSets from "../components/SkillSets";
import Box from '@mui/material/Box';

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
    <Container sx={{ marginTop: 5}}>
      {/* TODO: ちゃんと下揃えをしたい */}
      <div style={{ display: "flex", alignItems: "flex-end", marginBottom: 2 }}>
        <Typography variant="h2" sx={{ marginRight: 3 }} style={{ lineHeight: 0.75 }}>{taskDetailPageProps.title}</Typography>
        <Button
          variant="contained"
          color="primary"
          href={`slack://user?team=T05JTJTBSTS&id=${taskDetailPageProps.slackId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          このタスクを助ける(DMへ)
        </Button>
        <Button variant="text" color="primary">
          このタスクは解決した
        </Button>
      </div>
      <Typography color="text.secondary" gutterBottom sx={{ marginTop: 1}}>
        {taskDetailPageProps.userName},{" "}
        {taskDetailPageProps.taskDate.toLocaleDateString()}
      </Typography>
      <hr/>
      <SkillSets skillSet={taskDetailPageProps.skillSet} />
      <Card elevation={ 0 } sx={{ border: 1, borderColor: "#DDDDDD", borderRadius: 1, marginTop: 1, padding: 2 }}>
        <div style={{ display: "flex", alignItems: "flex-end", marginBottom: 2 }}>
          <Box sx={{ borderLeft: 5, paddingTop: 1, paddingBottom: 1, borderColor: "#BBBBBB" }}>
            <Typography variant="h5" sx={{ marginRight: 3, marginLeft:1 }} style={{ lineHeight: 0.5 }}>
              タスクの詳細
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            href={taskDetailPageProps.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            チケットのページへ
          </Button>
        </div>
        {/* ここはmarkdownに対応しても面白いかも */}
        <Typography variant="body2" sx={{marginTop: 2, marginBottom: 2}}>{taskDetailPageProps.taskDetail}</Typography>
        <hr/>
        <Box sx={{ height: 20}} />
        <Box sx={{ borderLeft: 5, paddingTop: 1, paddingBottom: 1, borderColor: "#BBBBBB" }}>
          <Typography variant="h5" sx={{ marginRight: 3, marginLeft:1 }} style={{ lineHeight: 0.5 }}>
            気になるところ
          </Typography>
        </Box>
        <Typography variant="body2" sx={{marginTop: 2}}>{taskDetailPageProps.concernDesc}</Typography>
      </Card>
    </Container>
  );
};

export default TaskDetailPage;
