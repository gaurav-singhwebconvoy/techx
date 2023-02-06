import React, { useEffect, useState } from 'react';
import { Link, withRouter, useHistory } from "react-router-dom";
import Api from '../../../Services/Api';
import Alert from '../../../Services/Alert';

import { useForm } from 'react-hook-form';
import { Form, FormLabel, Button, Modal } from 'react-bootstrap';
import Footer from './Footer';
const REACT_APP_NAME = process.env.REACT_APP_NAME;

export const Header = (props) => {
    var history = useHistory();

    return (
        <>

            {/* <!-- Header --> */}
            <header className="main-header">
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row align-items-center">

                        {/* <!-- col --> */}
                        <div className="col-xl-7 text-xl-left text-center">
                            {/* <!-- title-1 & para-1 --> */}
                            <h1 className="title-1 text-uppercase mb-2 mx-xl-0 mx-auto">VPS Hosting<br/>POWERFUL AND RELIABLE !</h1>
                            <p className="para-1 mb-2 mx-xl-0 mx-auto">Check out the services we offer below. We're determined to provide these services at the best quality - customer satisfaction and convenience are of the utmost importance for us.</p>
                            {/* <!-- notify --> */}
                            <div className="notify glassy mb-4">
                                <div className="icon">
                                    <img src="/assets/images/icons/bell.svg" className="lazy img-fluid" alt="Bell"/>
                                </div>
                                <div className="text">We don't ask for any personal information</div>
                            </div>
                            {/* <!-- buttons --> */}
                            <div className="buttons">
                                <a href="#" className="btn btn-fill-primary shadow-off mr-1 mb-md-0 mb-1">Get Started</a>
                                <a href="#" className="btn btn-outline-dark shadow-off">Learn More</a>
                            </div>
                        </div>

                        {/* <!-- col --> */}
                        <div className="col-xl-5 d-xl-block d-none">
                            {/* <!-- form-container --> */}
                            <div className="form-container" id="form-container">
                                {/* <!-- header-form --> */}
                                <form action="#" method="POST" className="header-form ml-auto" id="header-form">

                                    {/* <!-- form-title --> */}
                                    <h2 className="form-title mb-2">Try TechX hosting for free<br/>with a $100 credit</h2>

                                    {/* <!-- inputs --> */}
                                    <div className="inputs">

                                        {/* <!-- form-label --> */}
                                        <label htmlFor="email" className="form-label">
                                            <input type="email" name="email" className="glassy" id="email" placeholder="Email address" autoComplete="off" required/>
                                        </label>

                                        {/* <!-- form-label --> */}
                                        <label htmlFor="password" className="form-label">
                                            <input type="password" name="password" className="glassy" id="password" placeholder="Password" required/>
                                        </label>

                                    </div>

                                    {/* <!-- submit-button --> */}
                                    <button type="submit" className="btn btn-fill-success shadow-off w-100 font-500 mb-2 mt-1">Register</button>

                                    {/* <!-- hr --> */}
                                    <div className="hr position-relative"><span>Or sign up with</span></div>

                                    {/* <!-- links --> */}
                                    <div className="row small-gutters mt-2">

                                        {/* <!-- col --> */}
                                        <div className="col-6">
                                            <a href="#" className="btn btn-outline-dark level-up shadow-off w-100 font-500"><img src="/assets/images/icons/google.svg" className="lazy btn-icon img-fluid" alt="Google"/>Google</a>
                                        </div>

                                        {/* <!-- col --> */}
                                        <div className="col-6">
                                            <a href="#" className="btn btn-outline-dark level-up shadow-off w-100 font-500"><img src="/assets/images/icons/github.svg" className="lazy btn-icon img-fluid" alt="Google"/>GitHub</a>
                                        </div>

                                    </div>

                                    {/* <!-- form-comment --> */}
                                    <div className="form-comment mt-2">$100, 60-day free trial requires valid credit card.<br/>By signing up, you agree to the <a href="#">Terms of Service</a>.</div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default withRouter(Header);