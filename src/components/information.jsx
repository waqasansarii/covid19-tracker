import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './info.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:'20px'
  },

  infected:{
    borderBottom:'6px solid blue',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '0px 0px 7px ',
  },
  deaths:{
    borderBottom:'6px solid red',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '0px 0px 7px ',
  },
  recovered:{
    borderBottom:'6px solid green',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '0px 0px 7px ',
  }

}));



function Info_grid({ total: { TotalConfirmed, TotalDeaths, TotalRecovered } }) {

  const classes = useStyles();
  


  return (
    <div>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs >
            <Paper className={classes.infected}>
              <p>Total Confirmed</p>
              <p>{TotalConfirmed}</p>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.deaths}>

              <p>Total Deaths</p>
              <p>{TotalDeaths}</p>
            </Paper>
          </Grid>
          <Grid item xs >
            <Paper className={classes.recovered}>
              <p>Total Recovered</p>
              <p>{TotalRecovered}</p>
            </Paper>
          </Grid>
        </Grid>

      </div>

    </div>

  );
}

export default Info_grid;
