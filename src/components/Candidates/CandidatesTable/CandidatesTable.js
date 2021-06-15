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
  //   margin: {
  //     margin: 20,
  //     marginTop: 10,
  //     marginBottom: 10,
  //   },
  //   tableCell: {
  //     padding: 2,
  //     backgroundColor: theme.palette.background.paper,
  //   },
  //   tableTitle: {
  //     backgroundColor: theme.palette.default.background,
  //     color: theme.palette.default.contrastText,
  //     paddingLeft: '10px',
  //     padding: '5px',
  //     fontWeight: 'normal',
  //   },
}))

function CandidatesTable() {
  const classes = useStyles()
  const [candidates, setCandidates] = useState([])
  const [expand, setExpand] = useState(false)
  const [selectAll, setSelectAll] = useState(false)

    useEffect(() => {
        api.getCandidates().then((response) => setCandidates(response))
    }, [])

  //   return candidates.length == 0 ? (
  //     <h3
  //       className={`${classes.tableTitle} ${classes.margin}`}
  //       style={{ backgroundColor: '#EEE', color: '#AAA' }}
  //     >
  //       {title} (None)
  //     </h3>
  //   ) : (

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
              expand={expand}
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
