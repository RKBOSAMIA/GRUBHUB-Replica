import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import BuyerSignIn from './pages/BuyerSignIn/BuyerSignIn';
import BuyerSignUp from './pages/BuyerSignUp/BuyerSignUp';
import OwnerSignIn from './pages/OwnerSignIn/OwnerSignIn';
import OwnerSignUp from './pages/OwnerSignUp/OwnerSignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import BuyerProfile from './pages/BuyerProfile/BuyerProfile';
import Home from './pages/Home/Home';
import { AuthRoute,ProtectedRoute,BuyerProfileRoute } from '../src/util/route';

export default function App(){
    return (
      <div className="App">
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
