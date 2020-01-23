import React from 'react';
import Home from './Home';
import About from './About';
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
                            <a href="./about"><li>About Us</li></a>
                            <a href="./succulents"><li>Succulent Info</li></a>
                        </ul></h3>
                    </div>
                    <div className="col-md text-center">
                        <h1>Social</h1>
                        <a className="btn btn-instagram btn-lg" href="https://www.instagram.com/explore/tags/succulents/?hl=en" target="_blank"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-facebook btn-lg" href="https://www.facebook.com/groups/213771212055093/" target="_blank"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-twitter btn-lg" href="https://twitter.com/hashtag/succulent?lang=en" target="_blank"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-google btn-lg" href="http://youtube.com/" target="_blank"><i className="fa fa-youtube" /></a>
                    </div>
                    <div className="col-md text-center">
                        <h1>Contact</h1>
                        <a role="button" href="tel:9165555555"><i className="fa fa-phone" /> 916-555-5555</a><br />
                        <a role="button" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> kchong1989@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;