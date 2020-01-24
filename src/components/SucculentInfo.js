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
                        <CardImg src={baseUrl + "images/light-blue-and-yellow.jpg"} alt="Senecio Serpens" />
                        <CardTitle className="text-center">Senecio Serpens</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/agave.jpg"} alt="Agave" />
                        <CardTitle className="text-center">Agave</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/green-and-white.jpg"} alt="White-striped Agave" />
                        <CardTitle className="text-center">White-striped Agave</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/African-Milk-Tree.jpg"} alt="African Milk Tree" />
                        <CardTitle className="text-center">African Milk Tree</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/baobab-tree.jpg"} alt="Baobab Tree" />
                        <CardTitle className="text-center">Baobab Tree</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/cactus.jpg"} alt="Cactus" />
                        <CardTitle className="text-center">Cactus</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/cactus-flowers.jpg"} alt="Prickly Pear Cactus" />
                        <CardTitle className="text-center">Prickly Pear Cactus</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/aloe.jpg"} alt="Aloe Vera" />
                        <CardTitle className="text-center">Aloe Vera</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/purple.jpg"} alt="Graptoveria Debbie" />
                        <CardTitle className="text-center">Graptoveria Debbie</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/blue-and-red.jpg"} alt="Red Tip Desert Rose" />
                        <CardTitle className="text-center">Red Tip Desert Rose</CardTitle>
                    </Card>
                    <Card className="mb-5" id="infocard">
                        <CardImg src={baseUrl + "images/green-and-black.jpg"} alt="Sempervivum Black" />
                        <CardTitle className="text-center">Sempervivum Black</CardTitle>
                    </Card>
                </div>
                <div className="col-md mr-5">
                    <Card id="cardtext">
                        <CardBody>
                            <CardText>
                            <p>
                                The word "succulent" comes from the Latin word "succus," which means sap or juice. Succulents are plants that have thick fleshy parts, an adaption from arid climates or soil conditions. This adaptation helps the plant retain water and use it when it needs it, much like a cactus does in the desert--and yes, cactus plants are indeed succulents!
                            </p>
                                <Card className="mx-auto mb-5">
                                    <CardImg src={baseUrl + "images/window-sill.jpg"} alt="succulents" />
                                </Card>
                            <p>
                                Succulent plants come in a vast array or colors, shapes, sizes, and species. There are more than 60 different plant families under the succulent tree! So, your coworker’s green succulent on their office desk is just a small, very small, branch of the succulent family tree.
                            </p>
                                <Card className="mx-auto mb-5">
                                    <CardImg src={baseUrl + "images/assorted-colors.jpg"} alt="succulents" />
                                </Card>
                            <p>
                                Cactus, stone plants, aloe vera, agave, the Baobab tree (the largest succulent plant in the world) are just a small fraction of succulents in the world. There are about 2000 species of succulents—each with their own unique colors, shapes, and properties. 
                            </p>
                                <Card className="mx-auto mb-5">
                                    <CardImg src={baseUrl + "images/plants.jpg"} alt="succulents" />
                                </Card>
                            <p>
                                Succulents grow on every continent except Antarctica. Africa, in particular, has the most species of succulent plants. I mentioned the Baobab tree earlier—this plant grows natively in Africa and is nicknamed the Upside Down Tree. Natives tell of a legend that the god Thora did not like this tree in his garden. He pulled the tree out of the ground, roots and all, and threw it down below to Earth, where it landed upside down. Thus, the Upside Down tree was born. Fascinating, right?!
                            </p>
                                <Card className="mx-auto mb-5">
                                    <CardImg src={baseUrl + "images/baobab.jpg"} alt="Baobab Tree" />
                                    <CardTitle className="text-center">Baobab Tree</CardTitle>
                                </Card>
                            <p>
                                Let’s talk more about the special adaptation succulents have—their thick fleshy parts. Whether it be the plant’s leaves, stem, or even trunk, these thick parts have adapted to store water. Wildlife has learned that this adaptation is their potential lifeline when drought hits. During dry periods, wildlife will seek out certain succulent plants, like cactus or the Baobab tree, to drink the water stored inside. 
                            </p>
                                <Card className="mx-auto mb-5">
                                    <CardImg src={baseUrl + "images/pig-cactus.jpg"} alt="Wild javelina eating a cactus" />
                                    <CardTitle className="text-center">Wild javelina eating a cactus</CardTitle>
                                </Card>
                            <p>
                                But succulents don’t just thrive outdoors in the wild. They make excellent house plants as well! Minimum effort is needed to keep them alive: water sparingly and place in a spot that provides bright, indirect sunlight. You should also make sure the pot or container the plant is in has drainage holes at the bottom. That way, water doesn’t get trapped and the roots don’t sit in water. Following these tips will ensure your succulent is happy and healthy indoors for you and your houseguest to appreciate!
                            </p>
                                <Card className="mx-auto mb-4">
                                    <CardImg src={baseUrl + "images/potting.jpg"} alt="Potting a Zz Plant" />
                                    <CardTitle className="text-center">Potting a Zz Plant <br></br>(zanzibar gem)</CardTitle>
                                </Card>
                            <p>
                                Now, you have a little more knowledge about the wonderous succulent plant family! I hope you found this information helpful and have a new-found respect for these amazing plants. I encourage you to get some of your very own succulents and share the joy they bring because now, you are a… 
                            </p>
                            <p className="font-weight-bold text-center" id="ending">sucker for succulents! </p>
                            <p className="font-weight-italic text-center" id="disclosure">I do not own these images nor am I a professional botanist. The facts stated on this page are from my own research and may not be entirely true.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Succulents;