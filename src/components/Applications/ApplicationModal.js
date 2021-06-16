import React from "react";
import {
  Modal,
  Paper,
  ListItem,
  ListItemText,
  Typography,
  Card,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    padding: "20px",
    marginBottom: "10px",
  },
  card: {
    margin: "10px",
  },
}));

const ApplicationModal = ({
  openModal,
  handleClose,
  application,
  candidate,
}) => {
  const classes = useStyles();
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper className={classes.modalContainer}>
        <Card className={classes.card}>
          <AssignmentIndIcon />
          <ListItem>
            <ListItemText primary={candidate?.name} secondary="Applicant" />
          </ListItem>
          <ListItem>
            <ListItemText primary={application?.role.title} secondary="Role" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={application?.role.jobboard_title}
              secondary="Company"
            />
          </ListItem>
        </Card>
        <Card className={classes.card}>
          <Typography>Application Information:</Typography>
          <ListItem>
            <ListItemText
              primary={application?.new_status?.label || "New"}
              secondary="Status"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={moment(application?.updated).fromNow()}
              secondary="Last Updated"
            />
          </ListItem>
        </Card>
      </Paper>
    </Modal>
  );
};

export default ApplicationModal;
