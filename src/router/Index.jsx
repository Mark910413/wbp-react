import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
// import Home from "@page/home/Index";
// import Personal from '@page/personal/Index';

const Home = Loadable({
    loader: () => import( /*webpackChunkName: 'home'*/'@page/home/Index'),
    loading () { return <div>Loading...</div> },
});
const Personal = Loadable({
    loader: () => import('@page/personal/Index'),
    loading () { return <div>Loading...</div> },
});

class Widget extends React.Component{
    render() {
        return (
            <Router>
                <Link to="/home">home page</Link>
                <Link to="/personal"> personal page</Link>
                <Switch>
                    <Redirect from="/" to="/home" exact/>
                    <Route path="/home" component={Home} exact />
                    <Route path="/personal" component={Personal} exact /> 
                </Switch>
            </Router>
        );
    }
}

export default Widget;