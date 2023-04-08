import { useEffect, useState, useCallback } from "react";
import "./userlist.css";
import { Grid, Box, Tooltip, Fade } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import UserService from "../../services/userService";
import { UserInfo } from "../../types/User";
import User from "../User";

const UserList = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);

  const fetchUsers = useCallback(async () => {
    const users = await UserService.fetchUsers();
    return users;
  }, []);

  const refreshClickHander = async () => {
    const users = await fetchUsers();
    setUsers(users);
  };

  useEffect(() => {
    (async () => {
      const data = await fetchUsers();
      setUsers(data);
    })();
  }, []);

  return (
    <Grid container className="userlist">
      <Box className="userlist__header">
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Refresh button"
        >
          <RefreshIcon className="userlist_icon" onClick={refreshClickHander} />
        </Tooltip>
      </Box>
      <Box className="userlist__wrapper">
        {users.map((user: UserInfo) => {
          const { id, name, email, thumbnailUrl } = user;
          return (
            <User
              key={`user__${id}`}
              email={email}
              name={name}
              avatar={thumbnailUrl}
            />
          );
        })}
      </Box>
    </Grid>
  );
};

export default UserList;
