import React,{useState} from "react"
import ValidationTextFields from "./pages/Details"
import SimplePaper from "./components/Survey"
import Thankyou from "./pages/Thankyou"

const AppContext=React.createContext()

function AppContextProvider(props){
    //States
    const [activeStep,setActiveStep]=useState(0)
    const [surveyStep,setSurveyStep]=useState(0)
    const allPages={
        surveyPages:{
            page0:{
                text:"",
                comp:<ValidationTextFields/>
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
              return 'What the hell dudes...';
            case 1:
              return 'Hola Sompros?';
            case 2:
              return 'Gusta mata Gista!';
            default:
              return 'Unknown stepIndex';
          }
    }
      const handleNext = () => {
        setSurveyStep((prevSurveyStep) => prevSurveyStep + 1);
      };
    
      const handleBack = () => {
        setSurveyStep((prevSurveyStep) => prevSurveyStep - 1);
      };
    
      const handleReset = () => {
        setSurveyStep(0);
      };

      const handleNextPage = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };      

    //Render
    return(
        <AppContext.Provider value={{activeStep,surveyStep,setActiveStep,setSurveyStep,getStepperTexts,getSurveyQuestions,getCurrentPage,handleNext,handleBack,handleReset,handleNextPage}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext,AppContextProvider}