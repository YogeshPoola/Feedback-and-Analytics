import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CustomizedRatings from "../inputs/Rating"
import ButtonContent from './ButtonContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(48),
      height: theme.spacing(16)
    },
  },
  paperDimension:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems:'center'
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.paperDimension}>
      <Paper elevation={3} className={classes.root}>
        <CustomizedRatings/>
        <ButtonContent/>   
      </Paper>
    </div>
  );
}
