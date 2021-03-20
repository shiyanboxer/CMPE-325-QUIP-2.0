import React from "react"
import {Route, Switch} from "react-router-dom"
import { NewHome } from "./components/NewHome";
import { Profile } from "./components/Profile";

import SignIn from "./components/SignIn";
 class Routes extends React.Component{
     render(){
         return(
             <Switch>
                 <Route exact path="/home" component={NewHome}></Route>
                 <Route exact path="/profile" component={Profile}></Route>
                 <Route exact path ="/" component={SignIn}></Route>
                
             </Switch>
         )
 
     }
 }
 export default Routes;