import React, { Component } from 'react';
import { baseUrl } from '../shared/baseUrl';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Succulents from './SucculentInfo';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container-fluid p-0" >
                <Header />
                <Switch>
                    <Route exact path='/home' render={() => <Home /> } />
                    <Route exact path='/about' render={() => <About /> } />
                    <Route exact path='/succulents' render={() => <Succulents /> } />
                    <Redirect to='./home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);