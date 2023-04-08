import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        position: "absolute",
        width: "100vw",
        padding: "20px 5%",
        bottom: 0,
      }}
    >
      <Typography
        sx={{ color: "black", fontSize: "12px" }}
      >{`Just a random sample user app generated by Arun`}</Typography>
    </Box>
  );
};

export default Footer;
