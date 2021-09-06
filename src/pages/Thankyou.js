import React,{useContext} from "react"
import Box from '@material-ui/core/Box';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../AppContext';
import {Link} from "react-router-dom"
import AnalyticsPage from "./AnalyticsPage";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Thankyou(){
    const classes = useStyles();
    const {handleNextPage} = useContext(AppContext)
    return(
        <>
            <h1>Thank you for taking the Survey</h1>
            <Box color="text.primary" className={classes.root}>
                <Button variant="contained" color="primary" onClick={handleNextPage}>
                    Home
                </Button>
                <Link to="/analytics" style={{ textDecoration: 'none',background:'white',color:'blue' }}>
                <Button variant="contained" color="secondary">
                    Survey Analytics
                </Button>
                </Link>
            </Box>
        </>
    )
}