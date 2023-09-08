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
import Link from "@mui/material/Link";
import { SignUpUser } from "../types/SignUpUser";
import { PostSignupData } from "../service/api/AuthAPIClient";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { emojis } from "../constants/Emojis";
import { fetchDepartments, fetchSkills } from "../service/api/UtilAPIClient";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#EDEDF8',
    },
  },
});

type department = {
  department_id: number;
  department_name: string;
};

type skill = {
  skill_id: number;
  skill_name: string;
};

const SignUpPage = () => {
  const [departments, setDepartments] = useState<department[]>([]);
  const [skills, setSkills] = useState<skill[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<number>(0);
  const [selectedSkillSet, setSelectedSkillSet] = useState<number[]>([]);
  const [status, setStatus] = useState<number>(0);

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

    getDepartments();
    getSkills();
  }, []);

  const handleChangeSelectedSkillSet = (
    event: SelectChangeEvent<typeof selectedSkillSet>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedSkillSet(value as number[]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // TODO: バリデーションチェック
    const postData: SignUpUser = {
      name: data.get("userName") as string,
      department_id: selectedDepartment,
      skill_set: selectedSkillSet,
      slack_id: data.get("slackId") as string,
      status: status,
      email: data.get("email") as string,
      password: data.get("password") as string,
    };
    const response = await PostSignupData(postData);
    if (response != null) {
      // ログインページに遷移
      window.location.href = "/login";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"  sx={{ bgcolor: "#FFFFFF", borderRadius: 1, marginBottom: 5 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main", marginTop: 3  }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {/* 適宜必要なフィールドを追加 */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
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
                  value={selectedDepartment}
                  onChange={(event) => {
                    setSelectedDepartment(event.target.value as number);
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
                  value={selectedSkillSet}
                  onChange={handleChangeSelectedSkillSet}
                  input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={skills[value - 1].skill_name} />
                      ))}
                    </Box>
                  )}
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
                  value={status}
                  onChange={(event) => {
                    setStatus(event.target.value as number);
                  }}
                >
                  <MenuItem value={0}>余裕がある {emojis[0]}</MenuItem>
                  <MenuItem value={1}>忙しい {emojis[1]}</MenuItem>
                  <MenuItem value={2}>どうしようもない {emojis[2]}</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, marginBottom: 3  }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUpPage;
