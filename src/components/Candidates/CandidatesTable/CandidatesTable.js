import React, { useEffect, useState } from "react"
import {
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import CandidatesTableRow from "./CandidatesTableRow"
import api from "api"

const useStyles = makeStyles(() => ({
}))

function CandidatesTable() {
  const classes = useStyles()
  const [candidates, setCandidates] = useState([])
  const [selectAll, setSelectAll] = useState(false)

    useEffect(() => {
        api.getCandidates().then((response) => setCandidates(response))
    }, [])

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead style={{ padding: "0px" }}>
          <TableRow>
            <TableCell className={classes.tableCell} padding="none">
              <Checkbox checked={selectAll} onChange={() => setSelectAll(!selectAll)}/>
            </TableCell>
            <TableCell className={classes.tableCell} padding="none">
              Candidate Name
            </TableCell>
            <TableCell className={classes.tableCell} padding="none">
              Status
            </TableCell>
            <TableCell className={classes.tableCell} padding="none">
              # Apps
            </TableCell>
            <TableCell className={classes.tableCell} padding="none">
              Last Action
            </TableCell>
            <TableCell className={classes.tableCell} padding='none'>
                &nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidates.map((candidate) => (
            <CandidatesTableRow
              selectAll={selectAll}
              key={candidate.id}
              candidate={candidate}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CandidatesTable
