import React from 'react';
import Home from './Home';
import Succulents from './SucculentInfo';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container-fluid">
                <div className="row">             
                    <div className="col-md text-center">
                        <h1>Links</h1>
                        <h3><ul className="list-unstyled">
                            <a href="./home"><li>Home</li></a>
                            <a href="./succulents"><li>Succulent Info</li></a>
                        </ul></h3>
                    </div>
                    <div className="col-md text-center">
                        <h1>Social</h1>
                        <a className="btn btn-instagram btn-lg" href="https://www.instagram.com/explore/tags/succulents/?hl=en" target="_blank"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-facebook btn-lg" href="https://www.facebook.com/groups/213771212055093/" target="_blank"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-twitter btn-lg" href="https://twitter.com/hashtag/succulent?lang=en" target="_blank"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-google btn-lg" href="https://www.youtube.com/results?search_query=succulents" target="_blank"><i className="fa fa-youtube" /></a>
                    </div>
                    <div className="col-md text-center">
                        <h1>Contact</h1>
                        <a role="button" href="tel:5555555555"><i className="fa fa-phone" /> 555-555-5555</a><br />
                        <a role="button" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> SuckerForSucculents@succulents.co</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;