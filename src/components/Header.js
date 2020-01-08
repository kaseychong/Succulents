import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <Navbar dark sticky="top" expand="md">
                    <NavbarBrand className="mr-7" href="/"><img src="http://localhost:3001/images/succulent-logo.jpg" height="50" width="50" alt="succulent logo" /> </NavbarBrand>
                    <h1>Sucker for Succulents</h1>
                        <div className="col">
                            <Nav id="topnav" navbar>
                                <NavLink className="nav-link" href="/home">
                                    <i className="fa fa-houzz fa-lg" /> Home
                                    </NavLink>
                                <NavLink className="nav-link" href="/succulents">
                                    <i className="fa fa-leaf fa-lg" /> Succulents
                                    </NavLink>
                                <NavLink className="nav-link" href="/about">
                                    <i className="fa fa-info-circle fa-lg" /> About Us
                                    </NavLink>
                            </Nav>
                        </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;