import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import memories from "../../images/memories.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

import useStyles from "./styles";

const Navbar = () => {
  const user = false;
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img className={classes.image} src={memories} alt="icon" height="60" />
      <div>
        {user ? (
          <div>Logged In</div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => console.log(response)}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </AppBar>
  );
};

export default Navbar;
