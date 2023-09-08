import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import SkillSets from "./SkillSets";
import { AbstractTask } from "../types/AbstractTask";

const TaskComponent = (abstractTask: AbstractTask) => {
  return (
    <Card
      sx={{ minWidth: 275, margin: "20px", boxShadow: 2 }}
      variant="outlined"
    >
      <CardActionArea href={`/tasks/${abstractTask.id}`}>
        <CardContent>
          <Typography
            sx={{ fontSize: 15, ml: 1, margin: 0, textAlign: "right" }}
            color="text.secondary"
            gutterBottom
          >
            {new Date(abstractTask.task_date).toLocaleDateString()}
          </Typography>
          <Typography variant="h5" component="div">
            {abstractTask.title}
          </Typography>
          <Typography
            sx={{ marginLeft: 0 }}
            color="text.secondary"
            gutterBottom
          >
            {abstractTask.user_name}
          </Typography>
          <Card
            elevation={0}
            sx={{
              border: 1,
              borderColor: "#DDDDDD",
              borderRadius: 1,
              marginTop: 1,
              padding: 1,
            }}
          >
            <Typography sx={{ ml: 1, marginTop: 1, marginBottom: 2 }}>
              お悩み内容→{abstractTask.concern_desc}
            </Typography>
            <SkillSets skillSet={abstractTask.skill_set} />
          </Card>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TaskComponent;
