import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header: React.FC = () => {
  const token = Cookies.get("access_token");

  const handleLogout = () => {
    Cookies.remove("access_token");
    // 必要に応じて、他のログアウト処理やステートの更新をここに追加できます。
    // window.location.href = "/";
    // window.location.reload(); // オプション: ページをリロードしてUIを更新する
  };

  return (
    <AppBar
      position="static"
      elevation={3}
      sx={{ marginBottom: 2 }}
      style={{ color: "#000000", backgroundColor: "#ffffff" }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ marginRight: 3 }}>
          tasQ
        </Typography>
        <Button
          color="inherit"
          variant="outlined"
          sx={{ marginRight: 2, borderRadius: 4, borderColor: "#CCCCCC" }}
          component={Link}
          to="/users"
        >
          ユーザー一覧
        </Button>
        <Button
          color="inherit"
          variant="outlined"
          sx={{ borderRadius: 4, borderColor: "#CCCCCC" }}
          component={Link}
          to="/tasks"
        >
          タスク一覧
        </Button>
        <div style={{ flexGrow: 1 }}></div>
        {token ? (
          <>
            <Button color="inherit" component={Link} to="/myprofile">
              マイページ
            </Button>
            <Button
              color="inherit"
              onClick={handleLogout}
              component={Link}
              to="/"
            >
              ログアウト
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            ログイン
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
