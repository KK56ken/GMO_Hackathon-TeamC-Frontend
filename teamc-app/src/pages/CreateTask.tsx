import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";  
import Button from "@mui/material/Button"; 
import MenuItem from "@mui/material/MenuItem"; 
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import { InputLabel } from "@mui/material";
import { PostTask } from "../service/api/Task";

const names = [1, 2, 3, 4, 5, 6];

const CreateTask = () => {

  const [skillSet, setSkillSet] = React.useState<number[]>([]);
  const [taskName, setTaskName] = React.useState("");
  const [taskDetail, setTaskDetail] = React.useState("");
  const [concernDesc, setConcernDesc] = React.useState("");
  const [ticketLink, setTicketLink] = React.useState("");

  const handleChange = (event: SelectChangeEvent<typeof skillSet>) => {
    const {
      target: { value },
    } = event;
    setSkillSet(value as number[]);
  };

  const handleAddTask = async () => {
    const taskData = {
      title: taskName,
      token: "",
      task_date: new Date(),
      skill_set: skillSet,
      concern_desc: concernDesc,
      task_detail: taskDetail,
      ticket_link: ticketLink
    };
    try {
      const response = await PostTask(taskData);
      console.log("Task added:", response);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };


  return (
    <Container>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
            <Typography variant="h5" component="div">
              タスク名前：
            </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                  required
                  fullWidth
                  name=""
                  label="タスク名"
                  id="task-name"
                  onChange={(e) => setTaskName(e.target.value)}
                />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" component="div">
              技術：
              </Typography>
            </Grid>

            <Grid item xs={8}>
              <Grid item xs={12}>
                <InputLabel>Skill Set *</InputLabel>
                <Select
                  fullWidth
                  name="skillset"
                  labelId="skillset"
                  id="skillset"
                  multiple
                  value={skillSet}
                  onChange={handleChange}
                  input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="h5" component="div">
              タスク概要：
              </Typography>
            </Grid>

            <Grid item xs={8}>
              <TextField
                  required
                  fullWidth
                  name=""
                  label="タスク概要"
                  id="task-detaile"
                  onChange={(e) => setTaskDetail(e.target.value)}
                />
            </Grid>

            <Grid item xs={4}>
              <Typography variant="h5" component="div">
              お悩みポイントの詳細：
              </Typography>
            </Grid>

            <Grid item xs={8}></Grid>
              <TextField
                variant="outlined"
                multiline
                minRows="10"
                required
                fullWidth
                name=""
                label="お悩みポイントの詳細"
                id="task-detaile"
                onChange={(e) => setConcernDesc(e.target.value)}
              />
            
            <Grid item xs={4}>
              <Typography variant="h5" component="div">
                RedMineLink：
              </Typography>
            </Grid>

            <Grid item xs={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name=""
                label="お悩みポイントの詳細"
                id="task-detaile"
                onChange={(e) => setTicketLink(e.target.value)}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Grid item>
          <Button size="large" onClick={handleAddTask}>タスクを追加</Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default CreateTask;