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

const names = ["React", "Python", "Ruby", "Java", "Kotlin", "Swift"];

const CreateTask = () => {

  const [skillSet, setSkillSet] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof skillSet>) => {
    const {
      target: { value },
    } = event;
    setSkillSet(value as string[]);
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
              />
            </Grid>

        </CardContent>
        <Grid item>
          <Button size="large">タスクを追加</Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default CreateTask;