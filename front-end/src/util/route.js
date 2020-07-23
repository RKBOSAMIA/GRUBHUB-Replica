import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = ({ session: { _id } }) => ({
  loggedIn: Boolean(_id)
});

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
      path={path}
      render={props => (
        loggedIn ?
        <Redirect to='/home' /> :
        <Component {...props} />
      )}
    />
  );

  const Protected = ({ loggedIn, path, component: Component }) => (
    <Route
      path={path}
      render={props => (
        loggedIn ?
        <Component {...props} /> :
        <Redirect to='/buyerSignIn' />
      )}
    />
  );

  const BuyerProfile = ({ loggedIn, path, component: Component }) => (
    <Route
      path={path}
      render={props => (
        loggedIn ?
        <Redirect to='/buyerProfile' />:
        <Component {...props} />
      )}
    />
  );

  export const AuthRoute = withRouter(
    connect(mapStateToProps)(Auth)
  );
  export const ProtectedRoute = withRouter(
    connect(mapStateToProps)(Protected)
  );
  export const BuyerProfileRoute = withRouter(
    connect(mapStateToProps)(BuyerProfile)
  );