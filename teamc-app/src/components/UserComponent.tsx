import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { emojis } from "../constants/Emojis";

type UserComponentProps = {
  userId: number;
  userName: string;
  status: number;
  tasks: string[];
};

const UserComponent = (userComponentProps: UserComponentProps) => {
  return (
    <Card sx={{ minWidth: 275, margin: "20px" }} variant="outlined">
      <CardActionArea href={`/users/${userComponentProps.userId}`}>
        <CardContent>
          <Typography variant="h5" component="div">
            {userComponentProps.userName} {emojis[userComponentProps.status]}
          </Typography>
          {userComponentProps.status === 2 &&
          userComponentProps.tasks.length > 0 ? (
            <>
              <Typography variant="subtitle1" component="div">
                取り組みタスク一覧
              </Typography>
              <ul>
                {userComponentProps.tasks.map((task) => (
                  <li>{task}</li>
                ))}
              </ul>
            </>
          ) : (
            <></>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserComponent;
