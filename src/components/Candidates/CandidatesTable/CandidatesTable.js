import React, { useEffect, useState } from "react"
import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import CandidatesTableRow from "./CandidatesTableRow"
import api from "api"

const CandidatesTable = () => {
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
            <TableCell padding="none">
              <Checkbox checked={selectAll} onChange={() => setSelectAll(!selectAll)}/>
            </TableCell>
            <TableCell padding="none">
              Candidate Name
            </TableCell>
            <TableCell padding="none">
              Status
            </TableCell>
            <TableCell padding="none">
              # Apps
            </TableCell>
            <TableCell padding="none">
              Last Action
            </TableCell>
            <TableCell padding='none'>
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
