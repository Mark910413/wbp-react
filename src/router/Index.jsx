import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux'
import store from '@store/index';


const loading = () => <div>loading</div>;
const Home = Loadable({
    loader: () => import( /*webpackChunkName: 'home'*/'@page/home/Index'),
    loading,
});
const Personal = Loadable({
    loader: () => import('@page/personal/Index'),
    loading,
});

const Effects = Loadable({
    loader: () => import('@page/effects/Index'),
    loading,
})

class Widget extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Link to="/home">home page</Link>
                    <Link to="/personal"> personal page</Link>
                    <Link to="/effect"> effects page</Link>
                    <Switch>
                        <Redirect from="/" to="/home" exact/>
                        <Route path="/home" component={Home} exact />
                        <Route path="/personal" component={Personal} exact /> 
                        <Route path="/effect" component={Effects} exact /> 
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default Widget;