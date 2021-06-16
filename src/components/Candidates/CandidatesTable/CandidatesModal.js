import React from "react";
import { Modal, Paper, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    paddingTop: "20px",
    marginBottom: "10px",
    paddingRight: "50px",
  },
  closeIcon: {
    position: "absolute",
    right: 0,
    margin: 20,
    width: 20,
    color: theme.palette.grey[500],
    cursor: "pointer",
  },
  appBar: {
    position: "relative",
  },
  fullScreenTitle: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const CandidatesModal = ({ openModal, handleClose, candidate }) => {
  const classes = useStyles();
  return (
    // <div className={classes.modalContainer}>
      <Modal open={openModal} onClose={handleClose} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Paper>
          <Typography>THis is a modal</Typography>
        </Paper>
      </Modal>
    // </div>
  );
};

export default CandidatesModal;
