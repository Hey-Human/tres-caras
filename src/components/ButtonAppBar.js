import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";

// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: '#a5d6a76e'
  },
  customHeight: {
    minHeight: 40
  },
  offset: theme.mixins.toolbar
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [example, setExample] = useState("primary");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  return (
    <React.Fragment>
      <AppBar
        color={isCustomColor || isCustomHeight ? "primary" : example}
        className={`${classes.customColor} ${classes.customHeight}`}
      >
        <Toolbar>
          <Typography className={classes.title}>
          </Typography>
          <IconButton color="inherit" onClick={() => setExample("default")}>
            About
          </IconButton>
          <IconButton color="inherit" onClick={() => setExample("primary")}>
            Contact Us
          </IconButton>
          <IconButton color="inherit" onClick={() => setExample("secondary")}>
            Help us
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
  //
  // const classes = useStyles();
  // const [example, setExample] = useState("primary");
  // const isCustomColor = example === "customColor";
  // const isCustomHeight = example === "customHeight";
  // return (
  //   <React.Fragment>
  //     <AppBar
  //       color={isCustomColor || isCustomHeight ? "primary" : example}
  //       className={`${isCustomColor && classes.customColor} ${
  //         isCustomHeight && classes.customHeight
  //       }`}
  //     >
  //       <Toolbar>
  //         <Typography className={classes.title}>
  //         </Typography>
  //         <IconButton color="inherit" onClick={() => setExample("default")}>
  //           About
  //         </IconButton>
  //         <IconButton color="inherit" onClick={() => setExample("primary")}>
  //           Contact Us
  //         </IconButton>
  //         <IconButton color="inherit" onClick={() => setExample("secondary")}>
  //           Help us
  //         </IconButton>
  //       </Toolbar>
  //     </AppBar>
  //     <Toolbar />
  //   </React.Fragment>
  // );
}
