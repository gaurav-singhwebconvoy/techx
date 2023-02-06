import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import FAQ from '../../Components/FAQ';
import VPSPlans from '../../Components/VPSPlans';
import CallingMethod from '../../Services/CallingMethod';
import { capitalizeFirst, readLess } from '../../Services/Custom';
import Cookie from './Include/Cookie';
import Header from './Include/Header';
import ThemeSetting from './Include/ThemeSetting';

import './styles/Index.css';


// import useLoader from "../Services/useLoader";
export const Home = (props) => {


    return (
        <>
            <Header />
            {/* <!-- Section I --> */}
            <div className="se-i text-lg-left text-center">
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row">
                        {/* <!-- col --> */}
                        <div className="col-lg-3 col-6 mb-lg-0 mb-2">
                            {/* <!-- box --> */}
                            <div className="box">
                                <img src="/assets/images/icons/mail.svg" className="lazy box-icon" alt="Mail" />
                                <h2 className="box-title mb-0">Anonymous<br />Access</h2>
                            </div>
                        </div>

                        {/* <!-- col --> */}
                        <div className="col-lg-3 col-6 mb-lg-0 mb-2">
                            {/* <!-- box --> */}
                            <div className="box">
                                <img src="/assets/images/icons/logout.svg" className="lazy box-icon" alt="Logout" />
                                <h2 className="box-title mb-0">No Usage<br />Logs</h2>
                            </div>
                        </div>

                        {/* <!-- col --> */}
                        <div className="col-lg-3 col-6">
                            {/* <!-- box --> */}
                            <div className="box">
                                <img src="/assets/images/icons/digital.svg" className="lazy box-icon" alt="Digital" />
                                <h2 className="box-title mb-0">No Usage<br />Limit</h2>
                            </div>
                        </div>

                        {/* <!-- col --> */}
                        <div className="col-lg-3 col-6">
                            {/* <!-- box --> */}
                            <div className="box">
                                <img src="/assets/images/icons/wishlist.svg" className="lazy box-icon" alt="Wishlist" />
                                <h2 className="box-title mb-0">100% White . .<br />Listed</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section II --> */}
            <div className="se-ii bg-2">
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row align-items-center">
                        {/* <!-- col --> */}
                        <div className="col-xl-4 col-12 text-xl-left text-center mb-xl-0 mb-5">
                            {/* <!-- title-1 --> */}
                            <h2 className="title-1 mb-1">
                                <span>Popular</span><br className="d-xl-block d-none" />
                                <span>operating</span><br className="d-xl-block d-none" />
                                <span>systems.</span><br />
                                <span className="primary-color">Your Choice.</span>
                            </h2>
                            {/* <!-- para-1 --> */}
                            <p className="para-1 mb-0">With ability to upload your own Operating system.</p>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-8 col-12">
                            {/* <!-- row --> */}
                            <div className="row justify-content-center">
                                {/* <!-- col --> */}
                                <div className="col-lg-2 col-md-3 col-6">
                                    {/* <!-- item --> */}
                                    <div className="item text-center">
                                        <img src="/assets/images/os/windows.png" className="lazy img-fluid" alt="Windows" />
                                        <h3 className="text mb-0">Windows</h3>
                                    </div>
                                </div>
                                {/* <!-- col --> */}
                                <div className="col-lg-2 col-md-3 col-6">
                                    {/* <!-- item --> */}
                                    <div className="item text-center">
                                        <img src="/assets/images/os/android.png" className="lazy img-fluid" alt="Android" />
                                        <h3 className="text mb-0">Android</h3>
                                    </div>
                                </div>
                                {/* <!-- col --> */}
                                <div className="col-lg-2 col-md-3 col-6">
                                    {/* <!-- item --> */}
                                    <div className="item text-center">
                                        <img src="/assets/images/os/ubuntu.png" className="lazy img-fluid" alt="Ubuntu" />
                                        <h3 className="text mb-0">Ubuntu</h3>
                                    </div>
                                </div>
                                {/* <!-- col --> */}
                                <div className="col-lg-2 col-md-3 col-6">
                                    {/* <!-- item --> */}
                                    <div className="item text-center">
                                        <img src="/assets/images/os/debian.png" className="lazy img-fluid" alt="Debian" />
                                        <h3 className="text mb-0">Debian</h3>
                                    </div>
                                </div>
                                {/* <!-- col --> */}
                                <div className="col-lg-2 col-md-3 col-6">
                                    {/* <!-- item --> */}
                                    <div className="item text-center">
                                        <img src="/assets/images/os/centos.png" className="lazy img-fluid" alt="CentOS" />
                                        <h3 className="text mb-0">CentOS</h3>
                                    </div>
                                </div>
                                {/* <!-- col --> */}
                                <div className="col-lg-2 col-md-3 col-6">
                                    {/* <!-- item --> */}
                                    <div className="item text-center">
                                        <img src="/assets/images/os/open-suse.png" className="lazy img-fluid" alt="Open Suse" />
                                        <h3 className="text mb-0">Open Suse</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section III --> */}
            <div className="se-iii py-90">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head">
                        <h3 className="se-title-1">What about our plans</h3>
                        <h4 className="se-title-2">Get More Power With Our Web Hosting Products</h4>
                    </div>
                    {/* <!-- plans --> */}
                    <div className="plans mb-xl-4 mb-2">
                        {/* <!-- row --> */}
                        <div className="row mx-xl-0">
                            {/* <!-- col --> */}
                            <div className="col-xl-3 col-md-6 mb-xl-0 mb-2 px-xl-0">
                                {/* <!-- plan --> */}
                                <div className="plan">
                                    {/* <!-- plan-head --> */}
                                    <div className="plan-head">
                                        {/* <!-- plan-name --> */}
                                        <h3 className="plan-name">Basic Plan</h3>
                                        {/* <!-- plan-para --> */}
                                        <p className="plan-para">When you need just one site.</p>
                                    </div>
                                    {/* <!-- plan-price --> */}
                                    <div className="plan-price">
                                        {/* <!-- price --> */}
                                        <h4 className="price">$2.45</h4>
                                        {/* <!-- price-comment --> */}
                                        <p className="price-comment">Normally $9.99 - 12/mo term</p>
                                    </div>
                                    {/* <!-- actions --> */}
                                    <div className="actions">
                                        <a href="#" className="btn btn-fill-primary btn-sm shadow-off w-100">Choose Basic</a>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Top Features</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />1 Website <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />50 GB SSD Storage <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Custom Themes <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />24/7 Customer Support <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Website Builder Available</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />WordPress Integration</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Drag and Drop Functionality</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />AI-Driven Templates</li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Also Includes</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Domain - 1 year <span className="float-box" data-text="One free with purchase of a new 12-, 24- or 36-month plan. Plus ICANN fee of 2.84 USD per domain name per year. You must add the domain name into your cart before purchase, and you must select a domain term length equal to or less than the term length of your plan to qualify for the free domain offer. If you purchase a domain name for a term longer than the term of the plan, you will be charged for the additional registration term at the then-current rate. Cannot be used in conjunction with any other offer, sale, discount or promotion. Free domain offer applies only to the initial purchase term. After the initial purchase term, domains purchased through this offer will renew at the then-current renewal price."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free CDN Included <span className="float-box" data-text="Get faster page loads and better visitor experience with nearby, state-of-the-art data centers in North America, Europe or Asia-Pacific."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free SSL Certificate <span className="float-box" data-text="Linking your site to your domain name has never been easier with GoDaddy registered domain."></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-xl-3 col-md-6 mb-xl-0 mb-2 px-xl-0">
                                {/* <!-- plan --> */}
                                <div className="plan popular-plan">
                                    {/* <!-- plan-head --> */}
                                    <div className="plan-head">
                                        {/* <!-- plan-name --> */}
                                        <h3 className="plan-name">Advanced Plan</h3>
                                        {/* <!-- plan-para --> */}
                                        <p className="plan-para">For those running multiple sites.</p>
                                    </div>
                                    {/* <!-- plan-price --> */}
                                    <div className="plan-price">
                                        {/* <!-- price --> */}
                                        <h4 className="price">$5.45</h4>
                                        {/* <!-- price-comment --> */}
                                        <p className="price-comment">Normally $13.99 - 12/mo term</p>
                                    </div>
                                    {/* <!-- actions --> */}
                                    <div className="actions">
                                        <a href="#" className="btn btn-fill-primary btn-sm shadow-off w-100">Choose Advanced</a>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Top Features</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Unlimited Websites <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Unlimited SSD Storage <span className="float-box" data-text="We don't limit the amount of storage and bandwidth your site can use as long as it complies with our Hosting Agreement. Should your website bandwidth or storage usage present a risk to the stability, performance or uptime of our servers, we will notify you via email and you may be required to upgrade, or we may restrict the resources your website is using. It’s very rare that a website violates our Hosting Agreement and is typically only seen in sites that use hosting for file sharing or storage."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Custom Themes <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />24/7 Customer Support <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Website Builder Available</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />WordPress Integration</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Drag and Drop Functionality</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />AI-Driven Templates</li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Also Includes</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Domain - 1 year <span className="float-box" data-text="One free with purchase of a new 12-, 24- or 36-month plan. Plus ICANN fee of 2.84 USD per domain name per year. You must add the domain name into your cart before purchase, and you must select a domain term length equal to or less than the term length of your plan to qualify for the free domain offer. If you purchase a domain name for a term longer than the term of the plan, you will be charged for the additional registration term at the then-current rate. Cannot be used in conjunction with any other offer, sale, discount or promotion. Free domain offer applies only to the initial purchase term. After the initial purchase term, domains purchased through this offer will renew at the then-current renewal price."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free CDN Included</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free SSL Certificate</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Office 365 - 30 days <span className="float-box" data-text="Buy hosting and get one Microsoft Office 365 email mailbox with 5 GB of dedicated storage for email, contacts and shared online calendar free for the first year. If you choose to activate your mailbox, your Office 365 email mailbox will automatically renew annually at the then-current price until cancelled. You can cancel your automatic renewal at any time."></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-xl-3 col-md-6 mb-xl-0 mb-2 px-xl-0">
                                {/* <!-- plan --> */}
                                <div className="plan">
                                    {/* <!-- plan-head --> */}
                                    <div className="plan-head">
                                        {/* <!-- plan-name --> */}
                                        <h3 className="plan-name">Enterprise Plan</h3>
                                        {/* <!-- plan-para --> */}
                                        <p className="plan-para">With added privacy and security features.</p>
                                    </div>
                                    {/* <!-- plan-price --> */}
                                    <div className="plan-price">
                                        {/* <!-- price --> */}
                                        <h4 className="price">$9.45</h4>
                                        {/* <!-- price-comment --> */}
                                        <p className="price-comment">Normally $18.99 - 12/mo term</p>
                                    </div>
                                    {/* <!-- actions --> */}
                                    <div className="actions">
                                        <a href="#" className="btn btn-fill-primary btn-sm shadow-off w-100">Choose Enterprise</a>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Top Features</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Unlimited Websites <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Unlimited SSD Storage <span className="float-box" data-text="We don't limit the amount of storage and bandwidth your site can use as long as it complies with our Hosting Agreement. Should your website bandwidth or storage usage present a risk to the stability, performance or uptime of our servers, we will notify you via email and you may be required to upgrade, or we may restrict the resources your website is using. It’s very rare that a website violates our Hosting Agreement and is typically only seen in sites that use hosting for file sharing or storage."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Custom Themes <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />24/7 Customer Support <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Website Builder Available</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />WordPress Integration</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Drag and Drop Functionality</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />AI-Driven Templates</li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Also Includes</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Domain - 1 year <span className="float-box" data-text="One free with purchase of a new 12-, 24- or 36-month plan. Plus ICANN fee of 2.84 USD per domain name per year. You must add the domain name into your cart before purchase, and you must select a domain term length equal to or less than the term length of your plan to qualify for the free domain offer. If you purchase a domain name for a term longer than the term of the plan, you will be charged for the additional registration term at the then-current rate. Cannot be used in conjunction with any other offer, sale, discount or promotion. Free domain offer applies only to the initial purchase term. After the initial purchase term, domains purchased through this offer will renew at the then-current renewal price."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free CDN Included</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free SSL Certificate</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Office 365 - 30 days <span className="float-box" data-text="Buy hosting and get one Microsoft Office 365 email mailbox with 5 GB of dedicated storage for email, contacts and shared online calendar free for the first year. If you choose to activate your mailbox, your Office 365 email mailbox will automatically renew annually at the then-current price until cancelled. You can cancel your automatic renewal at any time."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Domain Privacy</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Automated Backup - 1 year</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-xl-3 col-md-6 mb-xl-0 mb-2 px-xl-0">
                                {/* <!-- plan --> */}
                                <div className="plan">
                                    {/* <!-- plan-head --> */}
                                    <div className="plan-head">
                                        {/* <!-- plan-name --> */}
                                        <h3 className="plan-name">Premium Plan</h3>
                                        {/* <!-- plan-para --> */}
                                        <p className="plan-para">Get more power with optimized web resources.</p>
                                    </div>
                                    {/* <!-- plan-price --> */}
                                    <div className="plan-price">
                                        {/* <!-- price --> */}
                                        <h4 className="price">$13.45</h4>
                                        {/* <!-- price-comment --> */}
                                        <p className="price-comment">Normally $17.99 - 12/mo term</p>
                                    </div>
                                    {/* <!-- actions --> */}
                                    <div className="actions">
                                        <a href="#" className="btn btn-fill-primary btn-sm shadow-off w-100">Choose Premium</a>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Top Features</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Unlimited Websites <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Unlimited SSD Storage <span className="float-box" data-text="We don't limit the amount of storage and bandwidth your site can use as long as it complies with our Hosting Agreement. Should your website bandwidth or storage usage present a risk to the stability, performance or uptime of our servers, we will notify you via email and you may be required to upgrade, or we may restrict the resources your website is using. It’s very rare that a website violates our Hosting Agreement and is typically only seen in sites that use hosting for file sharing or storage."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Custom Themes <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />24/7 Customer Support <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Optimized CPU Resources <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Website Builder Available</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />WordPress Integration</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Drag and Drop Functionality</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />AI-Driven Templates</li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Also Includes</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Domain - 1 year <span className="float-box" data-text="One free with purchase of a new 12-, 24- or 36-month plan. Plus ICANN fee of 2.84 USD per domain name per year. You must add the domain name into your cart before purchase, and you must select a domain term length equal to or less than the term length of your plan to qualify for the free domain offer. If you purchase a domain name for a term longer than the term of the plan, you will be charged for the additional registration term at the then-current rate. Cannot be used in conjunction with any other offer, sale, discount or promotion. Free domain offer applies only to the initial purchase term. After the initial purchase term, domains purchased through this offer will renew at the then-current renewal price."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free CDN Included</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free SSL Certificate</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Office 365 - 30 days <span className="float-box" data-text="Buy hosting and get one Microsoft Office 365 email mailbox with 5 GB of dedicated storage for email, contacts and shared online calendar free for the first year. If you choose to activate your mailbox, your Office 365 email mailbox will automatically renew annually at the then-current price until cancelled. You can cancel your automatic renewal at any time."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Domain Privacy</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Automated Backup</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Free Dedicated IP</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon" />Unlimited SSD Storage <span className="float-box" data-text="To add additional IPs, go to your My Hosting dashboard, locate IP Addresses and click Request, check the terms of agreement then click Submit Request. You may add additional IP address per request."></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- se-footer --> */}
                    <div className="se-footer d-flex align-items-center justify-content-center flex-wrap">
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check" />
                            <span className="text">Backups monthly</span>
                        </div>
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check" />
                            <span className="text">Free white-glove migrations</span>
                        </div>
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check" />
                            <span className="text">Staging enviroments, ande more.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section IV --> */}
            <div className="se-iv py-90 bg-2">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head">
                        <h3 className="se-title-1">More than just a tool</h3>
                        <h4 className="se-title-2">Fancy VPS features you get for totally free.</h4>
                    </div>
                    {/* <!-- space --> */}
                    <div className="space space-sm"></div>
                    {/* <!-- row --> */}
                    <div className="row justify-content-center">
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-1">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/businessman.svg" className="lazy img-fluid" alt="businessman" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Upgrade<br />Management</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">It’s hard to believe anyone would want to harm your website, but they do.<br />Thankfully.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img src="/assets/images/icons/right-arrow.svg" className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-2">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/priority.svg" className="lazy img-fluid" alt="priority" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Priority<br />Support &amp; contact</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">It’s hard to believe anyone would want to harm your website, but they do.<br />Thankfully.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img src="/assets/images/icons/right-arrow.svg" className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-3">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/mission.svg" className="lazy img-fluid" alt="mission" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Advanced<br />Functionality</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Host unlimited domains, create unlimited email addresses, databases, FTP accounts, & more.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img src="/assets/images/icons/right-arrow.svg" className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-4">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/hula-hoop.svg" className="lazy img-fluid" alt="hula-hoop" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Flexible <br />Software Env.</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Host unlimited domains, create unlimited email addresses, databases, FTP accounts, & more.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img src="/assets/images/icons/right-arrow.svg" className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-5">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/data-storage-device.svg" className="lazy img-fluid" alt="data-storage-device" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Weekly<br />Backups</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">We perform a courtesy off-site backup of your private server data each and every week.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img src="/assets/images/icons/right-arrow.svg" className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-6">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/power.svg" className="lazy img-fluid" alt="power" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Powerful<br />Hardware Env.</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">It’s hard to believe anyone would want to harm your website, but they do.<br />Thankfully.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img src="/assets/images/icons/right-arrow.svg" className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-lg-0 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-1">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/network.svg" className="lazy img-fluid" alt="network" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Network<br />Guarantee</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Host unlimited domains, create unlimited email addresses, databases, FTP accounts, & more.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img src="/assets/images/icons/right-arrow.svg" className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            {/* <!-- box --> */}
                            <div className="box color-2">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/security-on.svg" className="lazy img-fluid" alt="security-on" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Max Reliability<br />&amp; Accuracy</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Host unlimited domains, create unlimited email addresses, databases, FTP accounts, & more.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img src="/assets/images/icons/right-arrow.svg" className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section V --> */}
            <VPSPlans/>

            {/* <!-- Section VI --> */}
            <div className="se-vi py-90 bg-2">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head">
                        <h3 className="se-title-1">Trust our customers</h3>
                        <h4 className="se-title-2">VPS Hosting What Our Customers Have To Say?</h4>
                    </div>
                    {/* <!-- space --> */}
                    <div className="space space-sm"></div>
                    {/* <!-- row --> */}
                    <div className="row">
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-6">
                            {/* <!-- row --> */}
                            <div className="row">
                                {/* <!-- col --> */}
                                <div className="col-12">
                                    {/* <!-- box --> */}
                                    <div className="box">
                                        {/* <!-- user-info --> */}
                                        <div className="user-info">
                                            <img src="/assets/images/avatars/01.jpg" className="lazy avatar img-fluid" alt="Avatar" />
                                            <div className="name">Julie Lane</div>
                                            <div className="job">Instagram CEO</div>
                                        </div>
                                        {/* <!-- quotes --> */}
                                        <p className="quotes">I rally like using this product! Hands down, one of the best apps out there!</p>
                                    </div>
                                </div>
                                {/* <!-- col --> */}
                                <div className="col-12">
                                    {/* <!-- box --> */}
                                    <div className="box">
                                        {/* <!-- user-info --> */}
                                        <div className="user-info">
                                            <img src="/assets/images/avatars/02.jpg" className="lazy avatar img-fluid" alt="Avatar" />
                                            <div className="name">Gladys Hawkins</div>
                                            <div className="job">Adobe Product Manager</div>
                                        </div>
                                        {/* <!-- quotes --> */}
                                        <p className="quotes">Congrats to the team for building such an awesome product.<br /><br />My team and i are using this daily and we all find it really useful.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-6">
                            {/* <!-- row --> */}
                            <div className="row">
                                {/* <!-- col --> */}
                                <div className="col-12">
                                    {/* <!-- box --> */}
                                    <div className="box">
                                        {/* <!-- user-info --> */}
                                        <div className="user-info">
                                            <img src="/assets/images/avatars/03.jpg" className="lazy avatar img-fluid" alt="Avatar" />
                                            <div className="name">Gladys Hawkins</div>
                                            <div className="job">Adobe Product Manager</div>
                                        </div>
                                        {/* <!-- quotes --> */}
                                        <p className="quotes">Congrats to the team for building such an awesome product.<br /><br />My team and i are using this daily and we all find it really useful.</p>
                                    </div>
                                </div>
                                {/* <!-- col --> */}
                                <div className="col-12">
                                    {/* <!-- box --> */}
                                    <div className="box">
                                        {/* <!-- user-info --> */}
                                        <div className="user-info">
                                            <img src="/assets/images/avatars/04.jpg" className="lazy avatar img-fluid" alt="Avatar" />
                                            <div className="name">John Buckland</div>
                                            <div className="job">Full Stack Web Developer</div>
                                        </div>
                                        {/* <!-- quotes --> */}
                                        <p className="quotes">I can always find a great new addition to my wardrobe!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-6">
                            {/* <!-- row --> */}
                            <div className="row">
                                {/* <!-- col --> */}
                                <div className="col-12">
                                    {/* <!-- box --> */}
                                    <div className="box">
                                        {/* <!-- user-info --> */}
                                        <div className="user-info">
                                            <img src="/assets/images/avatars/05.jpg" className="lazy avatar img-fluid" alt="Avatar" />
                                            <div className="name">John Buckland</div>
                                            <div className="job">Full Stack Web Developer</div>
                                        </div>
                                        {/* <!-- quotes --> */}
                                        <p className="quotes">Wow This Is Amazing Exchange Platform Very Good Future I Hope This is Best Exchange Platform Of This Whole World</p>
                                    </div>
                                </div>
                                {/* <!-- col --> */}
                                <div className="col-12">
                                    {/* <!-- box --> */}
                                    <div className="box">
                                        {/* <!-- user-info --> */}
                                        <div className="user-info">
                                            <img src="/assets/images/avatars/06.jpg" className="lazy avatar img-fluid" alt="Avatar" />
                                            <div className="name">Sean Williams</div>
                                            <div className="job">Graphic Designer</div>
                                        </div>
                                        {/* <!-- quotes --> */}
                                        <p className="quotes">Great customer service from TechX, product arrived well wrapped and protected. at the end everything amazing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-6">
                            {/* <!-- row --> */}
                            <div className="row">
                                {/* <!-- col --> */}
                                <div className="col-12">
                                    {/* <!-- box --> */}
                                    <div className="box">
                                        {/* <!-- user-info --> */}
                                        <div className="user-info">
                                            <img src="/assets/images/avatars/07.jpg" className="lazy avatar img-fluid" alt="Avatar" />
                                            <div className="name">Sean Williams</div>
                                            <div className="job">Graphic Designer</div>
                                        </div>
                                        {/* <!-- quotes --> */}
                                        <p className="quotes">Great customer service from TechX, product arrived well wrapped and protected.</p>
                                    </div>
                                </div>
                                {/* <!-- col --> */}
                                <div className="col-12">
                                    {/* <!-- box --> */}
                                    <div className="box">
                                        {/* <!-- user-info --> */}
                                        <div className="user-info">
                                            <img src="/assets/images/avatars/08.jpg" className="lazy avatar img-fluid" alt="Avatar" />
                                            <div className="name">Gladys Hawkins</div>
                                            <div className="job">Adobe Product Manager</div>
                                        </div>
                                        {/* <!-- quotes --> */}
                                        <p className="quotes">I am an expert in web development and design. So far in the last couple of months I couldn't ask for better! Services are on spot, uptime is on spot!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- space --> */}
                    <div className="space space-sm"></div>
                    {/* <!-- buttons --> */}
                    <div className="buttons text-center">
                        <a href="#" className="btn btn-fill-primary shadow-off">See All Testimonials</a>
                    </div>
                </div>
            </div>

            <FAQ />

            <ThemeSetting />

            <Cookie />

                
        </>
    )
}

export default withRouter(Home);