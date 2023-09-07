import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";  
import Button from "@mui/material/Button"; 
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem"; 
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const CreateTask = () => {

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
              <Select>
                <MenuItem value={0}>golang</MenuItem>
                <MenuItem value={1}>python</MenuItem>
                <MenuItem value={2}>node</MenuItem>
              </Select>
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
                required
                fullWidth
                name=""
                label="お悩みポイントの詳細"
                id="task-detaile"
              />
            </Grid>

        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CreateTask;