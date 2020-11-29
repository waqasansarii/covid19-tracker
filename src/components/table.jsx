import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchData } from './options'
import './info.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  
});



export default function BasicTable() {
  const [allData, setAllData] = useState([])
  useEffect(() => {
    async function createData() {
      let api = await fetchData()

      setAllData(api.Countries)
    }
    createData()
  }, [])
  const classes = useStyles();

  return (
    <div className='table_div'>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead  >
            <TableRow>
              <TableCell className='table_head'>Country Name</TableCell>
              <TableCell align="right" className='table_head' >Total Confirmed</TableCell>
              <TableCell align="right" className='table_head'>Total Deaths</TableCell>
              <TableCell align="right" className='table_head'>Total Recovered</TableCell>
              <TableCell align="right" className='table_head'>last Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allData.map((row, i) => (

              <TableRow key={i}>
               
                <TableCell component="th" scope="row">
                  {row.Country}
                </TableCell>
                <TableCell align="right" style={{color:'blue'}} >{row.TotalConfirmed}</TableCell>
                <TableCell align="right" style={{color:'red'}}>{row.TotalDeaths}</TableCell>
                <TableCell align="right" style={{color:'green'}}>{row.TotalRecovered}</TableCell>
                <TableCell align="right">{new Date(row.Date).toDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
