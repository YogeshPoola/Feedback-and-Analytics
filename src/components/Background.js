import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SimplePaper from './Paper';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      // backgroundColor: '#cfe8fc', 
      display:'flex',
      flexWrap: 'wrap',
      justifyContent:'center',
      alignItems:'flex-start'
    }
  }));
  

export default function SimpleContainer() {
const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg' className={classes.root}>
        <SimplePaper/>
      </Container>
    </React.Fragment>
  );
}
