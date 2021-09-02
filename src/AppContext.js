import React,{useState} from "react"
import Details from "./pages/Details"
import SimplePaper from "./components/Survey"
import Thankyou from "./pages/Thankyou"

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
    'What the hell dudes...',
    'Hola Sompros?',
    'Gusta mata Gista!',
]
  
    //States
    const [activeStep,setActiveStep]=useState(0)
    const [surveyStep,setSurveyStep]=useState(0)
    const [inputValues,setInputValues]=useState({
      userName:"",
      age:"",
      region:""
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
                comp:<Thankyou/>
            }
        },
        analyticsPage:{
        }
    }
    const validationObject=
          {
          ageValidation:inputValues.age==="" ? "Please select Age group" : "",
          regionValidation:inputValues.region==="" ? "Please select a region" : ""
          }
    //Methods
    function getStepperTexts() {
        return ['User Details', 'Complete the Survey', 'Submit'];
      }
    
    function getCurrentPage(stepIndex) {
        switch (stepIndex) {
          case 0:
            return allPages.surveyPages.page0.comp;
          case 1:
            return allPages.surveyPages.page1.comp;
          case 2:
            return allPages.surveyPages.page2.comp;
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
        setSurveyStep((prevSurveyStep) => prevSurveyStep + 1);
      };
    
      const handleBack = () => {
        setSurveyStep((prevSurveyStep) => prevSurveyStep - 1);
      };
    
      const handleReset = () => {
        setSurveyStep(0);
      };

      const handleValidation=()=>{
        console.log("inside handleValidation")
        console.log(validationObject)
        return Object.values(validationObject).includes("")
      }

      const handleNextPage = (e) => {
        console.log(activeStep)
        e.preventDefault()
        if(activeStep===0){
          if(handleValidation()===false){
            console.log("validation running")
            setIsError(true)
          }
          else{
            console.log("No validation running")
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
          }
        }
        else{
          console.log("Validation Skipped")
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
      };      

    //Render
    return(
        <AppContext.Provider value={{activeStep,surveyStep,surveyQuestions,initialInputValues,inputValues,isError,setActiveStep,setSurveyStep,getStepperTexts,getSurveyQuestions,getCurrentPage,handleChange,handleNext,handleBack,handleReset,handleNextPage}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext,AppContextProvider}