import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 750,
  },
});

export default function TablePerso(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nom</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.persos.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell variant="body" align="right">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
