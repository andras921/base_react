import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/home/home";
import {ErrorBoundary} from 'react-error-boundary'
import FullPageError from "./component/error/fullPageError";
import Layout from "./component/layout/layout";
import {routes} from "./routes";

const AuthenticatedContent = () => {
    return (
        <ErrorBoundary FallbackComponent={FullPageError}>
            <Layout>
                <Switch>
                    {
                        routes.map((e) => {
                            return <Route exact path={e.path} key={e.path} component={e.component}/>
                        })
                    }
                    <Redirect to={'/home'}/>
                </Switch>
            </Layout>
        </ErrorBoundary>
    );
};

export default AuthenticatedContent;