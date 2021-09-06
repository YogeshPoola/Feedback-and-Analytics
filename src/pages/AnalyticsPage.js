import React,{useState,useEffect,useContext} from "react"
import firebaseDb from "../firebase"
import {Bar,Doughnut} from "react-chartjs-2"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from "../components/AppBar";
import Typography from '@material-ui/core/Typography';
import {AppContext} from "../AppContext"

const useStyles = makeStyles((theme) => ({
    root: {
        margin:theme.spacing(1),
        marginTop:theme.spacing(1),
        flexGrow: 1,
      textAlign:'center'
    },
    grid:{
        marginTop:theme.spacing(1)
    },
    paper: {
      padding: theme.spacing(10),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    text:{
        marginTop:theme.spacing(2),
        textAlign:'center'
    },
    paperCustom: {
        padding: theme.spacing(10),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height:290,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
    questionsAlign:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    }
  }));

export default function AnalyticsPage(){
    const classes = useStyles();
    const {surveyQuestions}=useContext(AppContext)

    const [analyticsData,setAnalyticsData]=useState({})
    useEffect(() => {
        firebaseDb.child('feedbackMain').on('value', snapshot => {
            if (snapshot.val() != null)
                setAnalyticsData({
                    ...snapshot.val()
                })
            else
                setAnalyticsData({})
        })
    }, [])
    const allFeedbacks=Object.values(analyticsData)
    const totalFeedbacks=allFeedbacks.length
    console.log(allFeedbacks)
    //Region Demographics
    const totalVillagePeople=allFeedbacks.filter(item=>item.region=='Village').length
    const totalTownPeople=allFeedbacks.filter(item=>item.region=='Town').length
    const totalCityPeople=allFeedbacks.filter(item=>item.region=='City').length
    const regionGroupsArray=[totalVillagePeople,totalTownPeople,totalCityPeople]

    //Age Demographics
    const totalYoungAge=allFeedbacks.filter(item=>item.age=='0-18').length
    const totalMiddleAge=allFeedbacks.filter(item=>item.age=='18-30').length
    const totalOldAge=allFeedbacks.filter(item=>item.age=='30-50').length
    const ageGroupsArray=[totalYoungAge,totalMiddleAge,totalOldAge]

    //Q's Analytics
    const q1Array=allFeedbacks.map(item=>item.q1)
    const q2Array=allFeedbacks.map(item=>item.q2)
    const q3Array=allFeedbacks.map(item=>item.q3)
    const q4Array=allFeedbacks.map(item=>item.q4)
    const q5Array=allFeedbacks.map(item=>item.q5)
        //Array Sum Reduce
    const reduceSum=(accumulator,input)=>accumulator+parseFloat(input)
    const avgQ1=(q1Array.reduce(reduceSum,0)/(5*totalFeedbacks))*5
    const avgQ2=(q2Array.reduce(reduceSum,0)/(5*totalFeedbacks))*5
    const avgQ3=(q3Array.reduce(reduceSum,0)/(5*totalFeedbacks))*5
    const avgQ4=(q4Array.reduce(reduceSum,0)/(5*totalFeedbacks))*5
    const avgQ5=(q5Array.reduce(reduceSum,0)/(5*totalFeedbacks))*5
    const questionAvgArray=[avgQ1,avgQ2,avgQ3,avgQ4,avgQ5]
    //Chart Data
    const regionData={
        labels:['Village','Town','City'],
        datasets:[
            {
                label:'Region Demographics',
                data:regionGroupsArray
            }
        ]
    }
    const ageData={
        labels:['0-18','18-30','30-50'],
        datasets:[
            {
                label:'Age Demographics',
                data:ageGroupsArray
            }
        ]
    }
    const questionsData={
        labels:['Q1','Q2','Q3','Q4','Q5'],
        datasets:[
            {   
                axis:'y',
                label:'Average Customer Ratings',
                data:questionAvgArray
            }
        ]
    }
    const ChartOptions={
        maintainAspectRatio: false
    }
    const questionsChartOptions={
        indexAxis: 'y'
    }
    return(
    <div className={classes.root}>
        <ButtonAppBar barColor="secondary" mainText="Analytics Page" buttonText="Feedback Page" linkTo=""/>
        <Typography variant="h4" gutterBottom className={classes.text}>
        User Demographics
      </Typography>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <Bar
              	width={300}
                  height={300}
              data={regionData}
              options={ChartOptions}
              />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <Doughnut
                            	width={300}
                                height={300}
                data={ageData}
                options={ChartOptions}
              />
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="h4" gutterBottom className={classes.text}>
        Feedback Analytics
      </Typography>
      <Grid container spacing={3} className={classes.grid}>
      <Grid item xs={6}>
          <Paper className={classes.paper}>
              <Bar
                data={questionsData}
                options={questionsChartOptions}
              />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperCustom}>
            <div>
                <Typography variant="h4">Feedback Questions</Typography>
                <div className={classes.questionsAlign}>
                    <Typography variant="h6">{`Q1: ${surveyQuestions[0]}`}</Typography>
                    <Typography variant="h6">{`Q2: ${surveyQuestions[1]}`}</Typography>
                    <Typography variant="h6">{`Q3: ${surveyQuestions[2]}`}</Typography>
                    <Typography variant="h6">{`Q4: ${surveyQuestions[3]}`}</Typography>
                    <Typography variant="h6">{`Q5: ${surveyQuestions[4]}`}</Typography>
                </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
}