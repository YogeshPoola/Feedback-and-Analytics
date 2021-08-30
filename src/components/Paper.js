import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CustomizedRatings from "../inputs/Rating"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems:'center',
    '& > *': {
    margin: theme.spacing(4),
      width: theme.spacing(102),
      height: theme.spacing(48)
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <CustomizedRatings/>   
        </Paper>
    </div>
  );
}
