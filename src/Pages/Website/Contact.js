import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import Cookie from './Include/Cookie';
import ThemeSetting from './Include/ThemeSetting';

import './styles/Contact.css';


// import useLoader from "../Services/useLoader";
export const Contact = (props) => {


    return (
        <>
            {/* <!-- Section I --> */}
            <div className="se-i-contact">
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row">
                        {/* <!-- col --> */}
                        <div className="col-lg-6 left-col d-flex flex-column justify-content-between">
                            {/* <!-- t-s --> */}
                            <div className="t-s mb-lg-0 mb-5">
                                {/* <!-- title-1 & title-2 & para-1 --> */}
                                <h2 className="title-2">Contact Us</h2>
                                <h1 className="title-1">Get in Touch With Us</h1>
                                <p className="para-1">Every guide is trained and excited to work with you, whether you need help with a password reset or you're looking for a team to build your complete web presence.</p>
                            </div>
                            {/* <!-- b-s --> */}
                            <div className="b-s">
                                {/* <!-- row --> */}
                                <div className="row">
                                    {/* <!-- col --> */}
                                    <div className="col-xl-4 col-lg-6 col-md-4 col-6 mb-xl-0 mb-2">
                                        {/* <!-- box --> */}
                                        <div className="box">
                                            {/* <!-- icon --> */}
                                            <div className="icon">
                                                <img src="/assets/images/pages/contact/icons/home.png" className="lazy img-fluid" alt="icon"/>
                                            </div>
                                            {/* <!-- text --> */}
                                            <p className="text">24 Gaston Lane, WD25 9QJ England, United Kingdom</p>
                                        </div>
                                    </div>
                                    {/* <!-- col --> */}
                                    <div className="col-xl-4 col-lg-6 col-md-4 col-6 mb-lg-0 mb-2">
                                        {/* <!-- box --> */}
                                        <div className="box">
                                            {/* <!-- icon --> */}
                                            <div className="icon">
                                                <img src="/assets/images/pages/contact/icons/envelope.png" className="lazy img-fluid" alt="icon"/>
                                            </div>
                                            {/* <!-- text --> */}
                                            <a href="mailto:info@techx.live" className="text">Info@techx.live</a>
                                            <a href="mailto:support@techx.live" className="text">Support@techx.live</a>
                                            <p className="text">Mail Us 24/7</p>
                                        </div>
                                    </div>
                                    {/* <!-- col --> */}
                                    <div className="col-xl-4 col-lg-6 col-md-4 col-6">
                                        {/* <!-- box --> */}
                                        <div className="box">
                                            {/* <!-- icon --> */}
                                            <div className="icon">
                                                <img src="/assets/images/pages/contact/icons/phone-call.png" className="lazy img-fluid" alt="icon"/>
                                            </div>
                                            {/* <!-- text --> */}
                                            <a href="https://api.whatsapp.com/send?phone=447387788662" className="text">+44 738-778-8662</a>
                                            <p className="text">Contact Us 24/7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 right-col">
                            {/* <!-- contact-form --> */}
                            <form action="#" className="contact-form ml-auto" id="contact-form" method="POST">
                                {/* <!-- form-title --> */}
                                <h1 className="form-title">Fill up the form and our team will get back to you within 24 hours.</h1>
                                {/* <!-- form-label --> */}
                                <label htmlFor="fname" className="form-label">
                                    <span className="input-label">Full Name</span>
                                    <input type="text" name="fname" id="fname" className="form-input" placeholder="Jhon Doe" required/>
                                        <span className="state"></span>
                                </label>
                                {/* <!-- form-label --> */}
                                <label htmlFor="email" className="form-label">
                                    <span className="input-label">Email</span>
                                    <input type="text" name="email" id="email" className="form-input" placeholder="jhon@gmail.com" required/>
                                        <span className="state"></span>
                                </label>
                                {/* <!-- form-label --> */}
                                <label htmlFor="msg" className="form-label">
                                    <span className="input-label">Message</span>
                                    <textarea name="msg" id="msg" rows="5" className="form-input" placeholder="Hello!" required></textarea>
                                    <span className="state"></span>
                                </label>
                                {/* <!-- buttons --> */}
                                <div className="buttons mt-2">
                                    <button type="submit" className="btn btn-sm btn-fill-success shadow-off text-uppercase w-100">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ThemeSetting />

            <Cookie />


        </>
    )
}

export default withRouter(Contact);