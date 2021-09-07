import React,{useState} from "react"
import Details from "./pages/Details"
import SimplePaper from "./components/Survey"
import Thankyou from "./pages/Thankyou"
import Suggestion from "./pages/Suggestions"
import firebaseDB from "./firebase"
const AppContext=React.createContext()

function AppContextProvider(props){
    //Variables
    const initialInputValues={
    userName:"",
    age:["","0-18","18-30","30-50","50+"],
    region:["","City","Town","Village"]
    // broughtDate:new Date()
  }

  const surveyQuestions=[
    'How much do you rate the quality of the product',
    'Rate the delivery of the product',
    'How would you rate the value for the money of the product',
    'How likely do you recommend the product to your friend',
    'Please rate the Customer Service provided by us'
]
  
    //States
    const [activeStep,setActiveStep]=useState(0)
    const [surveyStep,setSurveyStep]=useState(0)
    const [inputValues,setInputValues]=useState({
      userName:"",
      age:"",
      region:"",
      q1:"",
      q2:"",
      q3:"",
      suggestionText:""
      // broughtDate:""  
    }
  )
    const [isError,setIsError]=useState(false)
    const allPages={
        surveyPages:{
            page0:{
                text:"",
                comp:<Details/>
            },
            page1:{
                text:"",
                comp:<SimplePaper/>
            },
            page2:{
                text:"",
                comp:<Suggestion/>
            },
            page3:{
              text:"",
              comp:<Thankyou/>
        }
    }
  }
  
    const validationObject={
          ageValidation:inputValues.age,
          regionValidation:inputValues.region
          }

    const questionsObj={
      q1:surveyQuestions[0],
      q2:surveyQuestions[1],
      q3:surveyQuestions[2],
      q4:surveyQuestions[3],
      q5:surveyQuestions[4]
    }
    //Methods
    function getStepperTexts() {
        return ['User Details', 'Complete the Survey', 'Finish'];
      }
    
    function getCurrentPage(stepIndex) {
        switch (stepIndex) {
          case 0:
            return allPages.surveyPages.page0.comp;
          case 1:
            return allPages.surveyPages.page1.comp;
          case 2:
            return allPages.surveyPages.page2.comp;
          case 3:
            return allPages.surveyPages.page3.comp;
          default:
            return 'Unknown stepIndex';
        }
      }
    
    function getSurveyQuestions(stepIndex){
        switch (stepIndex) {
            case 0:
              return surveyQuestions[0];
            case 1:
              return surveyQuestions[1];
            case 2:
              return surveyQuestions[2];
              case 3:
                return surveyQuestions[3];
                case 4:
                  return surveyQuestions[4];
            default:
              return 'Unknown stepIndex';
          }
    }

    function getSurveyQuestionKey(stepIndex){
      switch (stepIndex) {
          case 0:
            return 'q1';
          case 1:
            return 'q2';
          case 2:
            return 'q3';
            case 3:
              return 'q4';
              case 4:
            return 'q5';
          default:
            return 'Unknown stepIndex';
        }
  }

      const handleChange = (event) => {
        const {name,value}=event.target
        setInputValues({
          ...inputValues,
          [name]:value
        });
      };
  
      const handleNext = () => {
        console.log(inputValues)
        setSurveyStep((prevSurveyStep) => prevSurveyStep + 1);
      };
    
      const handleBack = () => {
        setSurveyStep((prevSurveyStep) => prevSurveyStep - 1);
      };
    
      const handleReset = () => {
        setSurveyStep(0);
      };

      const handleValidation=()=>{
        return Object.values(validationObject).includes('')
      }

      const submitData=(obj)=>{
        console.log('submitting...')
        firebaseDB.child('feedbackMain').push(obj,
          err=>{
            if(err){
              console.log('error pushing to DB')
            }
          })
        
      }

      const handleNextPage = (e) => {
        console.log(inputValues)
        e.preventDefault()
        if(activeStep===0){
          if(handleValidation()===true){
            setIsError(true)
          }
          else{
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
          }
        }else if(activeStep===2){
          submitData(inputValues)
          setInputValues({
            userName:"",
            age:"",
            region:"",
            q1:"",
            q2:"",
            q3:"",
            suggestionText:""
            // broughtDate:""  
          })
          setActiveStep((prevActiveStep) => prevActiveStep + 1)
          console.log(`inside loop ${activeStep}`)
          setSurveyStep(0)
        }
        else if(activeStep===3){
          setActiveStep(0)
          setIsError(false)
        }
        else{
          setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
      };      

    //Render
    return(
        <AppContext.Provider value={{activeStep,surveyStep,surveyQuestions,initialInputValues,inputValues,questionsObj,isError,setActiveStep,setSurveyStep,getStepperTexts,getSurveyQuestions,getSurveyQuestionKey,getCurrentPage,handleChange,handleNext,handleBack,handleReset,handleNextPage,submitData}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext,AppContextProvider}