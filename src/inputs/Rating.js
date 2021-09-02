import React,{useState,useContext} from 'react';
import PropTypes from 'prop-types';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { AppContext } from '../AppContext';

const useStyles=makeStyles(theme=>(
  {root:{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'0'
  }}
))

const StyledRating = withStyles({
  root:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems:'center'
  },
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CustomizedRatings(props) {
  const handleChange=e=>{setValue(e.target.value)}
  const [value,setValue]=useState(0)
  const classes=useStyles()
  const {surveyStep,getSurveyQuestions} =useContext(AppContext)
  return (
    <div className={classes.root}>
      <Box component="fieldset" mb={3} borderColor="transparent" className={classes.root}>
        <Typography variant="h6">{getSurveyQuestions(surveyStep)}</Typography>
        <Rating
          name="customized-empty"
          defaultValue={0}
          value={value}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          onChange={handleChange}
        />
      </Box>
      {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Custom icon and color</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box> */}
      {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">10 stars</Typography>
        <Rating name="customized-10" defaultValue={2} max={10} />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Custom icon set</Typography>
        <Rating
          name="customized-icons"
          defaultValue={2}
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
        />
      </Box> */}
    </div>
  );
}
