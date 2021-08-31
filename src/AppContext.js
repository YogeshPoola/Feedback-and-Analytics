import React,{useState} from "react"

const AppContext=React.createContext()

function AppContextProvider(props){
    //States
    const [activeStep,setActiveStep]=useState(0)
    const [surveyStep,setSurveyStep]=useState(0)
    //Methods
    function getSteps() {
        return ['User Details', 'Complete the Survey', 'Submit'];
      }
      
      function getStepContent(stepIndex) {
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
        setSurveyStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setSurveyStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleReset = () => {
        setSurveyStep(0);
      };
    //Render
    return(
        <AppContext.Provider value={{activeStep,surveyStep,setActiveStep,setSurveyStep,getSteps,getStepContent,handleNext,handleBack,handleReset}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext,AppContextProvider}