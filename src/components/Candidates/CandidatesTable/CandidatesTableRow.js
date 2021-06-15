import React, { useState, useEffect } from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles'

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
              lauren dachille
            </TableCell>
            <TableCell>
              hired
            </TableCell>
            <TableCell>
              2
            </TableCell>
            <TableCell padding='none' style={{ fontWeight: 'bold' }} align='left'>
              2 years ago
            </TableCell>
            <TableCell padding='none' style={{ fontWeight: 'bold' }} align='left'>
              +
            </TableCell>
            
          </TableRow>
        </>
      )
}

export default CandidatesTableRow