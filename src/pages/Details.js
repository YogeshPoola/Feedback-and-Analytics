import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppContext } from '../AppContext';
import SimpleSelect from '../inputs/Select';
import ValidationTextFields from '../inputs/TextField';
import MaterialUIPickers from '../inputs/Calendar';


//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function Details() {
  const classes = useStyles();
  const {handleNextPage,initialInputValues,inputValues} = useContext(AppContext)

  return (
    
       <form className={classes.root} onSubmit={handleNextPage}>
      
      <ValidationTextFields/>

      <SimpleSelect menuItems={initialInputValues.age} selectName="age" selectValue={inputValues.age} label="Age"/>
      <SimpleSelect menuItems={initialInputValues.region} selectName="region" selectValue={inputValues.region} label="Region"/>

      {/* <MaterialUIPickers/> */}

      <div>
      <Button
        type="submit"
        variant="contained" 
        color="primary"
        >
        Head to Survey
        </Button>
      </div>
    </form>
  );
}
