import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function Home(props) {
    return (
        <div className="container-fluid" id="homecontainer">
            <div className="row pt-2">
                <div className="col-md text-center">
                    <h4>Are you sucker for succulents?</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md text-center">
                    <h2 style={{padding: "100px"}}>
                        Succulents are amazing plants. They come in a variety of shapes, colors, sizes, and more! No wonder they have quickly grown in populartiy this past decade! You, too, can be part of the club and fall in love with the wonders that succulents have to offer.
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md text-center p-4">
                    <h5>
                        Welcome to Sucker for Succulents!
                    </h5>
                </div>
            </div>
            <div className="row">
                <Card className="m-auto">
                    <CardImg src={ baseUrl + "images/variety.jpg"} alt="succulents varieties" />
                </Card>
                <Card className="m-auto">
                    <CardImg src={ baseUrl + "images/pot-and-vase.jpg"} alt="succulents in vases" />
                </Card>
                <Card className="m-auto">
                    <CardImg src={ baseUrl + "images/thick-petals.jpg"} alt="succulents petals" />
                </Card>
            </div>
            <div className="row">
                <div className="col-md text-center p-4">
                        <h6>To find out more about succulents, visit our <a href="/succulents">"Succulents"</a> page.</h6>
                </div>
            </div>
        </div>
    );
}

export default Home;