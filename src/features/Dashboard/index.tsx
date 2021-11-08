import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  searchBar: {
    margin: ".5rem",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default Dashboard;
