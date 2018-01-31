import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  console.log(isAuthenticated)
  return (<Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        {/* <h1>1</h1> */}
        <Component {...props} />
      </div>
    ) : (
        <div>
          <Header />
          {/* <h1>2</h1> */}
          <Component {...props} />
        </div>
        //<Redirect to="/" />
      )
  )} />);
}
  

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    isAuthenticated: !!state.auth.uid
    // isAuthenticated: true
  }
};

export default connect(mapStateToProps)(PrivateRoute);