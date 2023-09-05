import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type UserComponentProps = {
  userId: number;
  userName: string;
  status: number;
  tasks: string[];
};
const emojis = ["😀", "😅", "😇"];

const UserComponent = (userComponentProps: UserComponentProps) => {
  return (
    <Card sx={{ minWidth: 275, margin: "20px" }} variant="outlined">
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" component="div">
          {userComponentProps.userName}
        </Typography>
        <Typography style={{ fontSize: "x-larger" }}>
          {emojis[userComponentProps.status]}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography component="div">取り組みタスク一覧</Typography>
        <Typography variant="body2">
          {userComponentProps.tasks.map((task) => (
            <li>{task}</li>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserComponent;
