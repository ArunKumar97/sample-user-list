import { Box, Typography } from "@mui/material";
import "./user.css";

interface UserProps {
  email: string;
  name: string;
  avatar: string;
}

const User = ({ email, name, avatar }: UserProps) => {
  return (
    <Box className="user" sx={{ backgroundColor: "background.paper" }}>
      <Box className="user__figure">
        <img src={avatar} alt={`${name}`} />
      </Box>
      <Box className={"user__content"}>
        <Typography variant="h4">{name}</Typography>
        <Typography>{email}</Typography>
      </Box>
    </Box>
  );
};

export default User;
