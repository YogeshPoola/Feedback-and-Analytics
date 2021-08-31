import React, { useContext } from "react"
import ButtonAppBar from "../components/AppBar"
import HorizontalLabelPositionBelowStepper from "../components/Stepper"
import ValidationTextFields from "./Details"
import SimplePaper from "../components/Survey"
import Thankyou from "./Thankyou"
import { AppContext } from "../AppContext"

export default function MainPage(){
    const {activeStep,getCurrentPage} = useContext(AppContext)
    return(
        <>
            <ButtonAppBar/>
            <HorizontalLabelPositionBelowStepper/>
            {getCurrentPage(activeStep)}
        </>
    )
}