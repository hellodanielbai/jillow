import React from "react";
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavbarContainer from './navbar/navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SessionForm from './session_form/session_form'


const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <AuthRoute path="/" component={ SessionForm } />
        </Switch>
    </div>
);

export default App