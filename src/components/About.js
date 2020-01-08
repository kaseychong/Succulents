import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div className="container-fluid" id="aboutcontainer">
            <div className="row">
                <div className="col-md m-1">
                    <Breadcrumb>
                        <BreadcrumbItem to="/home">Home</BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
                <div className="col-md m-1">
                </div>
                <div className="col-md m-1">
                </div>
            </div>
        </div>
    );
}

export default About;