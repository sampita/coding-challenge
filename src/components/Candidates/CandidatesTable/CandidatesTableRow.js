import React, { useState, useEffect } from "react";

import {
  Button,
  Checkbox,
  Collapse,
  Paper,
  IconButton,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import moment from "moment";

const useStyles = makeStyles(() => ({
  table: {
    // display: 'inline'
  },
  subTable: {
      width: '100%',
  },
}));

const CandidatesTableRow = ({ candidate, selectAll }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setSelected(selected ? true : false);
  }, [selected]);

  return (
    <>
        <TableRow key={candidate?.id}>
          <TableCell>
            <Checkbox checked={selectAll ? true : selected} />
          </TableCell>
          <TableCell>{candidate?.name}</TableCell>
          <TableCell>
            {/* assuming applications array is ordered from most current descending (if not would have to add some ordering either to BE or FE) */}
            {candidate?.applications[0].new_status.label}
          </TableCell>
          <TableCell>{candidate?.applications?.length}</TableCell>
          <TableCell padding="none" style={{ fontWeight: "bold" }} align="left">
            {moment(candidate?.profile?.updated).fromNow()}
          </TableCell>
          <TableCell padding="none" style={{ fontWeight: "bold" }} align="left">
            <IconButton onClick={() => setExpanded(!expanded)}>
              {expanded ? (
                <RemoveOutlinedIcon />
              ) : (
                <AddCircleOutlineOutlinedIcon />
              )}
            </IconButton>
          </TableCell>
        </TableRow>
      <section>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {candidate?.applications?.map((application) => {
            return (
              <div className={classes.subTable}>
                <TableRow>
                  <TableCell>{application.role.title}</TableCell>
                  <TableCell>{application.new_status.label}</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>
                    <IconButton onClick={() => setExpanded(!expanded)}>
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </div>
            );
          })}
        </Collapse>
      </section>
    </>
  );
};

export default CandidatesTableRow;
