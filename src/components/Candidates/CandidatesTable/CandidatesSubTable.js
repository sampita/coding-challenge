import React, { useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ApplicationModal from "components/Applications/ApplicationModal";

const CandidatesSubTable = ({ candidate, expanded }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {candidate?.applications?.map((application) => {
            return (
              <Box>
                <Table>
                  <TableBody>
                    <TableRow>
                        {/* not proud of this hardcoded style fix... need to dig more into material ui table components and figure out why it wont spread evenly */}
                      <TableCell style={{ width: "44%" }}>
                        {application.role.title}
                      </TableCell>
                      <TableCell>{application.new_status.label}</TableCell>
                      <TableCell>&nbsp;</TableCell>
                      <TableCell>&nbsp;</TableCell>
                      <TableCell>&nbsp;</TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => setOpenModal(!openModal)}>
                          <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                      <ApplicationModal
                        openModal={openModal}
                        handleClose={handleClose}
                        application={application}
                        candidate={candidate}
                      />
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            );
          })}
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CandidatesSubTable;
