import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CandidatesTable from "./CandidatesTable/CandidatesTable";
// import classes from '*.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    height: "100%",
    width: "100%",
    backgroundColor: "#c3ede4",
    padding: "20px",
  },
}));

const Candidates = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <CandidatesTable />
    </Paper>
  );
};

export default Candidates;
