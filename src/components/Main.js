import React, { Component } from 'react';
import { baseUrl } from '../shared/baseUrl';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Succulents from './SucculentInfo';

class Main extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container-fluid p-0" >
                <Header />
                <Home />
                <About />
                <Succulents />
                <Footer />
            </div>
        );
    }
}

export default Main;