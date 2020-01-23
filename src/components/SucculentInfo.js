import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function Succulents(props) {
    return (
        <div className="container-fluid" id="succulentscontainer">
            <div className="row">
                <div className="col-md text-center mb-5 mt-5">
                    <h4>
                        Succulent 101
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md mb-5 mt-5 text-center">
                    <h6>
                        Want to learn more about succulents? We'll you're in the right place!
                    </h6>
                    <h6>
                        Scroll down to learn more.
                    </h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 pl-5">
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/light-blue-and-yellow.jpg"} alt="succulents" />
                        <CardTitle className="text-center">Senecio Serpens</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/agave.jpg"} alt="succulents" />
                        <CardTitle className="text-center">Agave</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/green-and-white.jpg"} alt="succulents" />
                        <CardTitle className="text-center">White-striped Agave</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/African-Milk-Tree.jpg"} alt="succulents" />
                        <CardTitle className="text-center">African Milk Tree</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/cactus.jpg"} alt="succulents" />
                        <CardTitle className="text-center">Cactus</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/cactus-flowers.jpg"} alt="succulents" />
                        <CardTitle className="text-center">Prickly Pear Cactus</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/aloe.jpg"} alt="succulents" />
                        <CardTitle className="text-center">Aloe Vera</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/purple.jpg"} alt="succulents" />
                        <CardTitle className="text-center">Graptoveria Debbie</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/blue-and-red.jpg"} alt="succulents" />
                        <CardTitle className="text-center">Red Tip Desert Rose</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/green-and-black.jpg"} alt="succulents" />
                        <CardTitle className="text-center">Sempervivum Black</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/window-sill.jpg"} alt="succulents" />
                        <CardTitle className="text-center">Common succulents on window sill</CardTitle>
                    </Card>
                </div>
                <div className="col-md mr-4">
                    <Card id="cardtext">
                        <CardBody>
                            <CardText>
                            <p>
                                Testing testing 1 2 3 
                            </p>
                            <p>
                                Need to move card over to the left
                            </p>
                            <p>
                                margin right should be 4
                            </p>
                            <p>
                                margin bottom should be 4
                            </p>
                            <p>
                                make card background transparent
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Succulents;