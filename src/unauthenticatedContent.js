import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "./pages/login/login";

const UnauthenticatedContent = props => {
    return (
        <Switch>
            <Route exact path='/login' >
                <Login/>
            </Route>
            <Redirect to={'/login'} />
        </Switch>
    );
};

UnauthenticatedContent.propTypes = {

};

export default UnauthenticatedContent;