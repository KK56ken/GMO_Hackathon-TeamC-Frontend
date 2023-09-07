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
          <Typography variant="h5" component="div">
            {taskComponentProps.title}
          </Typography>
          <Typography sx={{ ml: 1 }} color="text.secondary" gutterBottom>
            {taskComponentProps.userName}
          </Typography>
          <SkillSets skillSet={taskComponentProps.skillSet} />
          <Typography sx={{ ml: 1 }} color="text.secondary" gutterBottom>
            {taskComponentProps.taskDate.toLocaleDateString()}
          </Typography>
          <Typography sx={{ ml: 1 }}>
            お悩み内容→{taskComponentProps.concernDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TaskComponent;
