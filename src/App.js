import React,{useEffect,useContext} from "react"
import './App.css';
import MainPage from "./pages/MainPage";
import { Switch,Route } from "react-router"
import AnalyticsPage from "./pages/AnalyticsPage";
import firebaseDB from "./firebase"
import {AppContext} from "./AppContext"


function App() {
  // const {questionsObj}=useContext(AppContext)
  // console.log(questionsObj)
  // useEffect(()=>{
  //   firebaseDB.child('questionsObj').push(questionsObj,err=>{
  //     if(err){
  //       console.log('error loading Questions Table')
  //     }
  //   })
  // },[])
  return (
    <Switch>
    <Route exact path="/">
      <MainPage/>
    </Route>
    <Route exact path="/analytics">
      <AnalyticsPage/>
    </Route>
    </Switch>
  );
}

export default App;
