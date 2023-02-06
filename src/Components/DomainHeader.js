import React, { useEffect, useState } from 'react';
import { Link, withRouter, useHistory } from "react-router-dom";

export const DomainHeader = (props) => {
    var history = useHistory();

    return (
        <>
            <header className="text-lg-left text-center">
                <div className="container-fluid">
                    {/* <!-- title-1 --> */}
                    <h1 className="title-1 mb-3">Find Perfect Domain<br />Name For Your Website.</h1>
                    {/* <!-- search-form --> */}
                    <form action="#" method="POST" className="search-form">
                        {/* <!-- form-label --> */}
                        <label htmlFor="search-input" className="form-label position-relative d-md-flex d-block align-items-center justify-content-lg-start justify-content-center mx-lg-0 mx-auto">
                            {/* <!-- input-icon --> */}
                            <span className="input-icon">
                                <img src="/assets/images/pages/domains/icons/search.png" className="lazy img-fluid" alt="Search" />
                            </span>
                            {/* <!-- form-input --> */}
                            <input type="text" className="form-input" id="search-input" name="search-input" placeholder="Type the one you want here" />
                            {/* <!-- submit-btn --> */}
                            <a href="https://www.godaddy.com/en-in/domains" className="submit-btn text-uppercase ml-md-1 ml-0 mt-md-0 mt-1">Search</a>
                        </label>
                    </form>
                    {/* <!-- para-1 --> */}
                    <p className="para-1 mt-md-1 mt-2 text-lg-left text-center">Already have a domain?<a href="#">Transfer it to us</a></p>
                </div>
            </header>

        </>
    )
}

export default withRouter(DomainHeader);