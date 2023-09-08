import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="static" elevation={3} sx={{ marginBottom: 2 }} style={{ color: "#000000", backgroundColor: "#ffffff" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ marginRight: 3 }}>
          タスクヘルプツール
        </Typography>
        <Button color="inherit" variant="outlined" sx={{ marginRight: 2,  borderRadius: 4, borderColor: "#CCCCCC" }} component={Link} to="/users">
          ユーザー一覧
        </Button>
        <Button color="inherit" variant="outlined" sx={{ borderRadius: 4, borderColor: "#CCCCCC" }} component={Link} to="/tasks">
          タスク一覧
        </Button>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit" component={Link} to="/login">
          ログイン
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
