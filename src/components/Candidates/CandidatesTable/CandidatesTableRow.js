import React, { useState, useEffect } from 'react'

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
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined'
import moment from 'moment'

const CandidatesTableRow = ({ candidate, expand }) => {

    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        setExpanded(expand ? true : false)
      }, [expand])
    
      return (
        <>
          <TableRow
        //   className={classes.root} style={rowStyle}
          > 
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              {candidate?.name}
            </TableCell>
            <TableCell>
            {/* assuming applications array is ordered from most current descending (if not would have to add some ordering either to BE or FE) */}
              {candidate?.applications[0].new_status.label}
            </TableCell>
            <TableCell>
              {candidate?.applications?.length}
            </TableCell>
            <TableCell padding='none' style={{ fontWeight: 'bold' }} align='left'>
              {moment(candidate?.profile?.updated).fromNow()}
            </TableCell>
            <TableCell padding='none' style={{ fontWeight: 'bold' }} align='left'>
              {expanded ? <RemoveOutlinedIcon /> : <AddCircleOutlineOutlinedIcon />}
            </TableCell>
            
          </TableRow>
        </>
      )
}

export default CandidatesTableRow