import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { AppContext } from '../AppContext';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const {menuItems,label,selectName,selectValue}=props  
  const classes = useStyles();
  const {inputValues,isError,handleChange}=React.useContext(AppContext)

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select
          error={isError}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectValue}
          onChange={handleChange}
          label={label}
          name={selectName}
        >
          {menuItems.map(item=><MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
        <FormHelperText>Required*</FormHelperText>
      </FormControl>
    </div>
  );
}
