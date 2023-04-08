import { Grid, Typography } from "@mui/material";
import "./header.css";
import logoImg from "../../assets/images/logo-img.png";
import './header.css';

const Header = () => {
  return (
    <Grid className="header" sx={{ backgroundColor: "background.header" }}>
      <img src={logoImg} alt={`Sample site logo`} />
      <Typography
        className="header__site-name"
        variant="h2"
      >{`Sample React User list App`}</Typography>
    </Grid>
  );
};

export default Header;
