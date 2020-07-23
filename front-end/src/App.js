import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import BuyerSignIn from './pages/BuyerSignIn/BuyerSignIn';
import BuyerSignUp from './pages/BuyerSignUp/BuyerSignUp';
import OwnerSignIn from './pages/OwnerSignIn/OwnerSignIn';
import OwnerSignUp from './pages/OwnerSignUp/OwnerSignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import BuyerProfile from './pages/BuyerProfile/BuyerProfile';
import Avatar from '@material-ui/core/Avatar';
import Home from './pages/Home/Home';
import { AuthRoute,ProtectedRoute } from '../src/util/route';


export default function App(){
  const handleAvatar=(e)=>{
    window.location = '/buyerProfile';
  };
    return (
      <div className="App">
        <AppBar position='fixed' style={{backgroundColor:'white'}}>
          <ToolBar id='toolbar'>
            <div style={{marginTop:'8px',marginLeft:'10px'}}>GRUBHUB</div>
            <div style={{marginTop:'8px',marginLeft:'1220px',cursor:'pointer'}} onClick={handleAvatar}>
              <Avatar/>
            </div>
          </ToolBar>
        </AppBar>

        <body>
          <div>
            <Router>
              <Switch>
                  <Redirect exact from="/" to="/landingPage"/>
                  <Route exact path="/landingPage" component={LandingPage}/>
                  <AuthRoute exact path="/buyerSignIn" component={BuyerSignIn}/>
                  <AuthRoute exact path="/buyerSignUp" component={BuyerSignUp}/>
                  <Route exact path="/ownerSignIn" component={OwnerSignIn}/>
                  <Route exact path="/ownerSignUp" component={OwnerSignUp}/>
                  <Route exact path="/buyerProfile" component={BuyerProfile}/>
                  <ProtectedRoute exact path="/home" component={Home}/>
              </Switch>
            </Router>
          </div>
        </body>

      </div>
    )
};
