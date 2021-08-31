import React,{useContext} from "react"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppContext } from "../AppContext";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

export default function ButtonContent(){
    const classes=useStyles()
    const {surveyStep,handleBack,handleNext,handleReset}=useContext(AppContext)
    return(
        <div>
            {surveyStep === steps.length ? (
            <div>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
            </div>
            ) : (
            <div>            
                <div>
                <Button
                    disabled={surveyStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                >
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    {surveyStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
                </div>
            </div>
            )}
        </div>
    )
            }
