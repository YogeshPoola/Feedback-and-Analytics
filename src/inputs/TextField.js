import React,{useContext} from "react"
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {AppContext} from "../AppContext"

export default function ValidationTextFields(){
    const {handleChange,inputValues}=useContext(AppContext)
    return(
        <>
        <div>
        <Typography variant="h4" gutterBottom>
        Fill in details to take the Survey
      </Typography>
        </div>
      <div>
        <TextField
          variant="outlined"
          id="standard-error-helper-text"
          label="Full Name"
          defaultValue=""
          helperText="Optional"
          name="userName"
          onChange={handleChange}
          value={inputValues.userName}
        />
      </div>
        </>
    )
}


