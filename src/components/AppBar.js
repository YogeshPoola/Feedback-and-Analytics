import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign:'center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const {barColor,mainText,buttonText,linkTo}=props
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color={barColor} aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h4" className={classes.title}>
            {mainText}
          </Typography>
          <Link to={`/${linkTo}`} style={{ textDecoration: 'none' ,background:'white',color:'blue'}}>
            <Button color="secondary">{buttonText}</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
