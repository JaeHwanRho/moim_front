import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


function MoimLists(props) {
  return (
    <div>
        <TableRow>
            <TableCell>{props.created_at}</TableCell>
            <TableCell>{props.title}</TableCell>
            <TableCell>{props.name}</TableCell>
        </TableRow>
    </div>
  );
}

export default MoimLists;