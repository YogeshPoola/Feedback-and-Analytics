import React,{useContext} from "react"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppContext } from "../AppContext";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height:theme.spacing(8),
      margin: '0',
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
    const {surveyStep,surveyQuestions,handleBack,handleNext,handleReset,handleNextPage}=useContext(AppContext)
    const steps=surveyQuestions
    return(
        <div className={classes.root}>
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

                {surveyStep === steps.length - 1 ? (
                    <Button variant="contained" color="primary" onClick={handleNextPage}>
                    Finish
                </Button>
                ) : (
                    <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                </Button>
                )}
                </div>
            </div>
            )}
        </div>
    )
            }
