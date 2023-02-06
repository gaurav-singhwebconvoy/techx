import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import Cookie from './Include/Cookie';
import ThemeSetting from './Include/ThemeSetting';

import './styles/About.css';

export const About = (props) => {


    return (
        <>

            {/* <!-- Section I --> */}
            <div className="se-i-about">
                <div className="container position-relative">
                    {/* <!-- se-head --> */}
                    <div className="se-head">
                        <h3 className="se-title-1">About us</h3>
                        <h4 className="se-title-2">We champion entrepreneurs by delivering the perfect help and tools for their journey.</h4>
                    </div>
                    {/* <!-- content --> */}
                    <div className="content">
                        {/* <!-- media --> */}
                        <div className="media">
                            {/* <!-- media-img --> */}
                            <img src="https://via.placeholder.com/700x450" className="media-img lazy img-fluid" alt="Media" />
                            {/* <!-- play-btn --> */}
                            <a href="#" className="btn btn-fill-primary btn-circle btn-lg play-btn">
                                <img src="/assets/images/pages/about/icons/play-button.svg" className="btn-icon lazy img-fluid" alt="Play Button" />
                            </a>
                        </div>
                    </div>
                    {/* <!-- random-icons --> */}
                    <div className="random-icons">
                        <img src="https://via.placeholder.com/40" className="blue-random lazy" alt="Devzilla" />
                        <img src="https://via.placeholder.com/80" className="yellow-random lazy" alt="Devzilla" />
                        <img src="https://via.placeholder.com/80" className="green-random lazy" alt="Devzilla" />
                    </div>
                    {/* <!-- random-icons-right --> */}
                    <div className="random-icons-right">
                        <img src="https://via.placeholder.com/40" className="red-random lazy" alt="Devzilla" />
                    </div>
                </div>
            </div>

            {/* <!-- Section II --> */}
            <div className="se-ii-about">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head">
                        <h3 className="se-title-1">Overview</h3>
                        <h4 className="se-title-2">We’re a trusted growth partner to millions of everyday entrepreneurs.</h4>
                    </div>
                    {/* <!-- row --> */}
                    <div className="row justify-content-center">
                        {/* <!-- col --> */}
                        <div className="col-lg-4 col-md-6">
                            {/* <!-- box --> */}
                            <div className="box text-center">
                                {/* <!-- box-title --> */}
                                <h3 className="box-title">2003</h3>
                                {/* <!-- box-text --> */}
                                <p className="box-text">TechX hosting services was founded by HH. Abdulkarim.</p>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-lg-4 col-md-6">
                            {/* <!-- box --> */}
                            <div className="box text-center">
                                {/* <!-- box-title --> */}
                                <h3 className="box-title">+2M</h3>
                                {/* <!-- box-text --> */}
                                <p className="box-text">We power websites all over the world and support thousands more every day.</p>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-lg-4 col-md-6">
                            {/* <!-- box --> */}
                            <div className="box text-center">
                                {/* <!-- box-title --> */}
                                <h3 className="box-title">750+</h3>
                                {/* <!-- box-text --> */}
                                <p className="box-text">Our vast team is dedicated to helping our customers around the clock.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- content --> */}
                    <div className="content text-lg-left text-md-center text-left">
                        {/* <!-- row --> */}
                        <div className="row align-items-center">
                            {/* <!-- col --> */}
                            <div className="col-lg-6 pr-xl-3 mb-lg-0 mb-2">
                                {/* <!-- side-img --> */}
                                <img src="/assets/images/my.jpeg" className="side-img lazy img-fluid" alt="Image" style={{ width: "300px", importance: "important" }} />
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-lg-6 pl-xl-3">
                                {/* <!-- title-2 --> */}
                                <h4 className="title-2">Co-Founder  & CEO</h4>
                                {/* <!-- title-2 --> */}
                                <h2 className="title-1">HH. Abdulkarim <br />-  Cybersecurity </h2>
                                {/* <!-- para-2 --> */}
                                <p className="para-2">TechX is the place folks come to name their idea, create a compelling brand and a great looking website, attract customers with digital and social marketing, and manage their work. Where no tool alone will do, we give direct one-on-one guidance with a human connection.</p>
                            </div>
                        </div>
                        {/* <!-- row --> */}
                        <div className="row align-items-center">
                            {/* <!-- col --> */}
                            <div className="col-lg-6 pr-xl-3 order-lg-1 order-2">
                                {/* <!-- title-2 --> */}
                                <h4 className="title-2">Techical Partner</h4>
                                {/* <!-- title-2 --> */}
                                <h2 className="title-1">Our leadership team humbly and passionately dedicates itself to unleashing the collective power of everyday entrepreneurs.</h2>
                                {/* <!-- para-2 --> */}
                                {/* <!-- <p className="para-2">TechX is the place folks come to name their idea, create a compelling brand and a great looking website, attract customers with digital and social marketing, and manage their work. Where no tool alone will do, we give direct one-on-one guidance with a human connection.</p> --> */}
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-lg-6 pl-xl-3 mb-lg-0 mb-2 order-lg-2 order-1">
                                {/* <!-- side-img --> */}
                                <img src="/assets/images/gaurav.png" className="side-img lazy img-fluid" alt="Image" style={{ width: "400px", importance: "important" }} />
                            </div>
                        </div>
                        {/* <!-- row --> */}

                    </div>
                </div>
            </div>

            {/* <!-- Section III --> */}
            <div className="se-iii-about">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head">
                        <h3 className="se-title-1">What We Do</h3>
                        <h4 className="se-title-2">We champion entrepreneurs by delivering the perfect help and tools for their journey.</h4>
                    </div>
                    {/* <!-- row --> */}
                    <div className="row justify-content-center text-center">
                        {/* <!-- col --> */}
                        <div className="col-lg-4 col-md-6">
                            {/* <!-- media --> */}
                            <img src="/assets/images/pages/about/icons/solution.png" className="media lazy img-fluid" alt="Image" />
                            {/* <!-- title-1 --> */}
                            <h2 className="title-1">Complete Web Solutions</h2>
                            {/* <!-- para-1 --> */}
                            <p className="para-1 px-xl-2">Our best-in-class solutions are designed to meet the needs of a wide range of customers. All fully-managed, these solutions empower.</p>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-lg-4 col-md-6">
                            <img src="/assets/images/pages/about/icons/maintenance.png" className="media lazy img-fluid" alt="Image" />
                            {/* <!-- title-1 --> */}
                            <h2 className="title-1">Extensive Tools</h2>
                            {/* <!-- para-1 --> */}
                            <p className="para-1 px-xl-2">Integrated into every TechX account, a suite of add-on products and resources enhance our customers' ability to build an online.</p>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-lg-4 col-md-6">
                            <img src="/assets/images/pages/about/icons/question.png" className="media lazy img-fluid" alt="Image" />
                            {/* <!-- title-1 --> */}
                            <h2 className="title-1">Expert Support</h2>
                            {/* <!-- para-1 --> */}
                            <p className="para-1 px-xl-2">No one knows the web better. We understand not only how it works, but more importantly how it can be used as a tool to bring our customers.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section IV --> */}
            <div className="se-iv-about">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head">
                        <h3 className="se-title-1">Our Team</h3>
                        <h4 className="se-title-2">Our team humbly and passionately dedicates itself to unleashing the collective power of everyday entrepreneurs.</h4>
                    </div>
                    {/* <!-- content --> */}
                    <div className="content">
                        {/* <!-- row --> */}
                        <div className="row text-center">
                            {/* <!-- col --> */}
                            {/* <!-- col --> */}
                            <div className="col-lg-4 col-md-6">
                                {/* <!-- item --> */}
                                <div className="item">
                                    {/* <!-- avatar --> */}
                                    <img src="/assets/images/my.jpeg" className="side-img lazy img-fluid" alt="Image" style={{ width: "200px", importance: "important" }} />
                                    {/* <!-- name --> */}
                                    <h3 className="name">HH. Abdulkarim</h3>
                                    {/* <!-- job --> */}
                                    <h4 className="job">CEO & Founder</h4>
                                </div>
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-lg-4 col-md-6">
                                {/* <!-- item --> */}
                                <div className="item">
                                    {/* <!-- avatar --> */}
                                    <img src="/assets/images/gaurav.png" className="side-img lazy img-fluid" alt="Image" style={{ width: "200px", importance: "important" }} />
                                    {/* <!-- name --> */}
                                    <h3 className="name">James Gary</h3>
                                    {/* <!-- job --> */}
                                    <h4 className="job">Technical Partner</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* <!-- item --> */}
                                <div className="item">
                                    {/* <!-- avatar --> */}
                                    <img src="/assets/images/harpreet.jfif" className="media lazy img-fluid" alt="Image" style={{ width: "200px", importance: "important" }} />
                                    {/* <!-- name --> */}
                                    <h3 className="name">Richard Kevin</h3>
                                    {/* <!-- job --> */}
                                    <h4 className="job">Web Developer</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <ThemeSetting />

            <Cookie />
        </>
    )
}

export default withRouter(About);