import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { emojis } from "../constants/Emojis";
import { AbstractUser } from "../types/AbstractUser";

const UserComponent = (abstractUser: AbstractUser) => {
  return (
    <Card sx={{ minWidth: 275, margin: "20px" }} variant="outlined">
      <CardActionArea href={`/users/${abstractUser.user_id}`}>
        <CardContent>
          <Typography variant="h5" component="div">
            {abstractUser.user_name} {emojis[abstractUser.status]}
          </Typography>
          {abstractUser.status === 2 && abstractUser.tasks.length > 0 ? (
            <>
              <Typography variant="subtitle1" component="div">
                取り組みタスク一覧
              </Typography>
              <ul>
                {abstractUser.tasks.map((task) => (
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
