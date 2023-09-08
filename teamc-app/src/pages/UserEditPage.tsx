import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { emojis } from "../constants/Emojis";
import { fetchDepartments, fetchSkills } from "../service/api/UtilAPIClient";
import { UpdateUser } from "../types/UpdateUser";
import { UpdateUserData } from "../service/api/UserAPIClient";
import { useLocation } from "react-router-dom";

type department = {
  department_id: number;
  department_name: string;
};

type skill = {
  skill_id: number;
  skill_name: string;
};

const UserEditPage = () => {
  const location = useLocation();
  const data = location.state.updateUser as UpdateUser;
  const [updateUser, setUpdateUser] = useState<UpdateUser>(data);

  const [loading, setLoading] = useState<boolean>(true);
  const [departments, setDepartments] = useState<department[]>([]);
  const [skills, setSkills] = useState<skill[]>([]);

  useEffect(() => {
    const getDepartments = async () => {
      const response = await fetchDepartments();
      if (response != null) {
        setDepartments(response);
      }
    };
    const getSkills = async () => {
      const response = await fetchSkills();
      if (response != null) {
        setSkills(response);
      }
    };
    getSkills();
    getDepartments();
    setLoading(false);
  }, []);

  const handleChangeSelectedSkillSet = (
    event: SelectChangeEvent<typeof updateUser.skill_set>
  ) => {
    const {
      target: { value },
    } = event;
    setUpdateUser({ ...updateUser, skill_set: value as number[] });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(updateUser);
    const response = await UpdateUserData(updateUser);
    if (response != null) {
      window.location.href = "/myprofile";
    }
  };

  return loading ? (
    <></>
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                value={updateUser.user_name}
                onChange={(event) => {
                  setUpdateUser({
                    ...updateUser,
                    user_name: event.target.value as string,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Department *</InputLabel>
              <Select
                required
                fullWidth
                name="department"
                labelId="department"
                id="department"
                value={updateUser.department_id}
                onChange={(event) => {
                  setUpdateUser({
                    ...updateUser,
                    department_id: event.target.value as number,
                  });
                }}
              >
                {departments.map((department) => (
                  <MenuItem
                    key={department.department_id}
                    value={department.department_id}
                  >
                    {department.department_name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Skill Set *</InputLabel>
              <Select
                required
                fullWidth
                name="skillset"
                labelId="skillset"
                id="skillset"
                multiple
                value={updateUser.skill_set}
                onChange={handleChangeSelectedSkillSet}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={
                  skills.length !== 0
                    ? (selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip
                              key={value}
                              label={skills[value - 1].skill_name}
                            />
                          ))}
                        </Box>
                      )
                    : undefined
                }
              >
                {skills.map((skill) => (
                  <MenuItem key={skill.skill_id} value={skill.skill_id}>
                    {skill.skill_name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="slackId"
                label="Slack ID"
                name="slackId"
                value={updateUser.slack_id}
                onChange={(event) => {
                  setUpdateUser({
                    ...updateUser,
                    slack_id: event.target.value as string,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>今のステータス *</InputLabel>
              <Select
                required
                fullWidth
                name="status"
                labelId="status"
                id="status"
                value={updateUser.status}
                onChange={(event) => {
                  setUpdateUser({
                    ...updateUser,
                    status: event.target.value as number,
                  });
                }}
              >
                <MenuItem value={0}>余裕がある {emojis[0]}</MenuItem>
                <MenuItem value={1}>忙しい {emojis[1]}</MenuItem>
                <MenuItem value={2}>どうしようもない {emojis[2]}</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UserEditPage;
