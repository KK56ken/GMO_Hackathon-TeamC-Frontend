import React, { useEffect } from "react";
import { Button, Typography, Box, Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { getStatus } from "../service/api/UserAPIClient";

const WelcomePage = () => {
  // 読み込み時にgetStatusを実行してAPIと通信できるか確認する
  useEffect(() => {
    getStatus();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        <Typography variant="h4" mt={3}>
          ようこそ、タスクヘルプツールへ！
        </Typography>
        <Grid container spacing={2} justifyContent="center" mt={3}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/signup"
            >
              サインアップ
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/login"
            >
              ログイン
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WelcomePage;
