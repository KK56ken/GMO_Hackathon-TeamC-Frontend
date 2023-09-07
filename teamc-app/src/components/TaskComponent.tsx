import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import SkillSets from "./SkillSets";

type TaskComponentProps = {
  id: number;
  title: string;
  userName: string;
  skillSet: string[];
  taskDate: Date;
  concernDesc: string;
};

const TaskComponent = (taskComponentProps: TaskComponentProps) => {
  return (
    <Card sx={{ minWidth: 275, margin: "20px", boxShadow: 2}} variant="outlined">
      <CardActionArea href={`/tasks/${taskComponentProps.id}`}>
        <CardContent>
        <Typography sx={{ fontSize: 15, ml: 1, margin: 0, textAlign: "right" }} color="text.secondary" gutterBottom>
            {taskComponentProps.taskDate.toLocaleDateString()}
          </Typography>
          <Typography variant="h5" component="div">
            {taskComponentProps.title}
          </Typography>
          <Typography sx={{ marginLeft: 0 }} color="text.secondary" gutterBottom>
            {taskComponentProps.userName}
          </Typography>
          <Card elevation={ 0 } sx={{ border: 1, borderColor: "#DDDDDD", borderRadius: 1, marginTop: 1, padding: 1 }}>
            <Typography sx={{ ml: 1, marginTop: 1, marginBottom: 2 }}>
              お悩み内容→{taskComponentProps.concernDesc}
            </Typography>
            <SkillSets skillSet={taskComponentProps.skillSet} />
          </Card>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TaskComponent;
