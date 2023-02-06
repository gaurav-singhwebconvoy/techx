import React, { useEffect, useState } from 'react';
import { Link, withRouter, useHistory } from "react-router-dom";
const REACT_APP_NAME = process.env.REACT_APP_NAME;

export const Footer = (props) => {


    return (
        <>
            {/* <!-- Contact Bubble --> */}
            <div className="contact-bubble">
                {/* <!-- live-chat-btn --> */}
                <a href="#" className="live-chat-btn">
                    <img src="/assets/images/icons/chat.svg" className="img-fluid" alt="Icon"/>
                        <span className="text">Live Chat</span>
                </a>
            </div>

            {/* <!-- Theme Footer --> */}
            <footer className="theme-footer">
                {/* <!-- footer-top --> */}
                <div className="footer-top">
                    <div className="container-fluid">
                        {/* <!-- list-group --> */}
                        <div className="list-group">
                            {/* <!-- footer-list --> */}
                            <ul className="footer-list list-unstyled">
                                <li className="list-title">About TechX</li>
                                <li className="list-link"><Link to="/about">About Us</Link></li>
                                <li className="list-link"><a href="#">Newsroom</a></li>
                                <li className="list-link"><a href="#">Investor Relations</a></li>
                                <li className="list-link"><a href="#">Careers</a></li>
                                <li className="list-link"><a href="#">Corporate Responsibility</a></li>
                                <li className="list-link"><a href="#">Trust Center</a></li>
                                <li className="list-link"><Link to="/terms">Legal</Link></li>
                            </ul>
                            {/* <!-- footer-list --> */}
                            <ul className="footer-list list-unstyled">
                                <li className="list-title">Help Center</li>
                                <li className="list-link"><a href="knowledge-base.html">Help Center</a></li>
                                <li className="list-link"><a href="#">Community</a></li>
                                <li className="list-link"><a href="#">TechX Blog</a></li>
                                <li className="list-link"><a href="#">Contact Us</a></li>
                                <li className="list-link"><Link to="/support">Report Abuse</Link></li>
                                <li className="list-link"><a href="#">Resources</a></li>
                            </ul>
                            {/* <!-- footer-list --> */}
                            <ul className="footer-list list-unstyled">
                                <li className="list-title">Resources</li>
                                <li className="list-link"><a href="#">Webmail</a></li>
                                <li className="list-link"><a href="#">WHOIS</a></li>
                                <li className="list-link"><a href="#">TechX Mobile App</a></li>
                                <li className="list-link"><a href="#">ICANN Confirmation</a></li>
                                <li className="list-link"><a href="#">Designers &amp; Developers</a></li>
                                <li className="list-link"><a href="#">Corporate Domains</a></li>
                                <li className="list-link"><a href="#">Redeem Code</a></li>
                            </ul>
                            {/* <!-- footer-list --> */}
                            <ul className="footer-list list-unstyled">
                                <li className="list-title">Partner Programs</li>
                                <li className="list-link"><a href="#">Affiliates</a></li>
                                <li className="list-link"><a href="#">Reseller Programs</a></li>
                                <li className="list-link"><a href="#">TechX Pro</a></li>
                            </ul>
                            {/* <!-- footer-list --> */}
                            <ul className="footer-list list-unstyled">
                                <li className="list-title">Account</li>
                                <li className="list-link"><a href="#">My Products</a></li>
                                <li className="list-link"><a href="#">Renewals & Billing</a></li>
                                <li className="list-link"><a href="register.html">Create Account</a></li>
                            </ul>
                            {/* <!-- footer-list --> */}
                            <ul className="footer-list list-unstyled">
                                <li className="list-title">Shopping</li>
                                <li className="list-link"><a href="#">Domain Search</a></li>
                                <li className="list-link"><a href="#">Websites</a></li>
                                <li className="list-link"><a href="#">WordPress</a></li>
                                <li className="list-link"><a href="#">Hosting</a></li>
                                <li className="list-link"><a href="#">Web Security</a></li>
                                <li className="list-link"><a href="#">Email &amp; Office</a></li>
                                <li className="list-link"><a href="#">Phone Numbers</a></li>
                                <li className="list-link"><a href="#">Promos</a></li>
                                <li className="list-link"><Link to='/cyber-security'>Cyber Security</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- footer-middle --> */}
                <div className="footer-middle">
                    <div className="container-fluid">
                        {/* <!-- reg-bar --> */}
                        <div className="reg-bar text-md-left text-center">
                            <div className="d-lg-flex align-items-center justify-content-between">
                                {/* <!-- text --> */}
                                <div className="text">
                                    {/* <!-- title-4 --> */}
                                    <h4 className="title-4">Switch to Pro Plan today and<br/>save up to 30% off</h4>
                                    {/* <!-- para-2 --> */}
                                    <p className="para-2">Check which version are available to upgrade to and validate wheter<br/>your current subscription is upgradeable.</p>
                                </div>
                                {/* <!-- buttons --> */}
                                <div className="buttons mt-lg-0 mt-3">
                                    <a href="#" className="btn btn-fill-primary shadow-off text-uppercase font-500">Upgrade my plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer-bottom --> */}
                <div className="footer-bottom">
                    <div className="container-fluid">
                        {/* <!-- content --> */}
                        <div className="content d-flex align-items-start mb-2">
                            {/* <!-- logo --> */}
                            <div className="logo mb-lg-0 mb-1">
                                <a href="#">
                                    <img src="/assets/images/templates/footer/logo-d.png" className="img-fluid" alt="TechX"/>
                                </a>
                            </div>
                            {/* <!-- copyright --> */}
                            <div className="copyright mr-lg-5">
                                {/* <!-- links --> */}
                                <ul className="links list-unstyled d-flex align-items-center flex-wrap">
                                    <li><Link to="/terms">Terms of Use</Link></li>
                                    <li><Link to="/terms">Privacy Policy</Link></li>
                                    <li><a href="#">Trademarks</a></li>
                                    <li><a href="#">License Agreements</a></li>
                                </ul>
                                {/* <!-- para-3 --> */}
                                <p className="para-3">Copyright &copy; 2023, TechX All Rights Reserved. </p>
                            </div>
                            {/* <!-- social-list --> */}
                            <ul className="social-list list-unstyled d-flex align-items-center justify-content-lg-end justify-content-center ml-lg-auto mt-lg-0 mt-2">
                                <li><a href="https://www.instagram.com/techxltd/"><img src="/assets/images/templates/footer/instagram.png" alt="Icon"/></a></li>
                                <li><a href="https://twitter.com/techxltd"><img src="/assets/images/templates/footer/twitter.png" alt="Icon"/></a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100088283091972"><img src="/assets/images/templates/footer/facebook.png" alt="Icon"/></a></li>
                                <li><a href="https://www.tiktok.com/@techxltd?_t=8ZJjBgoCb70&_r=1"><img src="/assets/images/templates/footer/tiktok.png" alt="Icon"/></a></li>
                                <li><a href="https://youtube.com/@techx10"><img src="/assets/images/templates/footer/youtube.png" alt="Icon"/></a></li>
                            </ul>
                        </div>
                        {/* <!-- content --> */}
                        <div className="content d-lg-flex align-items-end flex-wrap">
                            {/* <!-- para-3 --> */}
                            <p className="para-3">Use of this Site is subject to express terms of use.<br/>By using this site, you signify that you agree to be bound by these <Link to="/terms">Universal Terms of Service</Link>.</p>
                            {/* <!-- sign --> */}
                            <div className="signature ml-auto mt-lg-0 mt-1">
                                <p className="para-3">Developed by <a href="https://techx.live/">TechX</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default withRouter(Footer);