import React,{useContext} from "react"
import Box from '@material-ui/core/Box';
import { AppContext } from '../AppContext';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {     
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Suggestion(){
    const classes = useStyles();
    const {handleChange,inputValues,handleNextPage} = useContext(AppContext)
    return(
        <Box color="text.primary" display="flex" flexDirection="column" justifyContent="center" alignItems="center" className={classes.root}>
            <h3>Any Suggestions ?</h3>
            <textarea rows={5} cols={50} onChange={handleChange} value={inputValues.suggestionText} name="suggestionText"/>
            <Button variant="contained" color="primary" onClick={handleNextPage}>
                    Submit Feedback
            </Button>
        </Box>
    )
}