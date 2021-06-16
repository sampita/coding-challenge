import React, { useState, useEffect } from "react";

import {
  Checkbox,
  IconButton,
  TableCell,
  TableRow,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import moment from "moment";
import CandidatesSubTable from "./CandidatesSubTable";

const CandidatesTableRow = ({ candidate, selectAll }) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(false);

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
      <CandidatesSubTable candidate={candidate} expanded={expanded} />
    </>
  );
};

export default CandidatesTableRow;
