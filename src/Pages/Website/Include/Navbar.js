import { useEffect, useState } from "react";
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";
import ServicesDropdown from "../../../Components/ServicesDropdown";
import SideBox from "../../../Components/SideBox";
import LanguageSelector from "./LanguageSelector";
import NoticeBar from "./NoticeBar";

const Navbar = (props) => {
    var history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const handleSideBoxToggle = () => {
        setIsOpen(!isOpen);
    };
    let activePage = window.location.href.split("/")[3];
    switch (activePage) {
        case "":
            activePage = 'home';
            break;

        default:
            // activePage = 'home';
            break;
    }
    // useEffect(() => {
    //     console.log("tets");
    //     setActiveFilter(activePage);
    // }, [activePage]);

    const [activeFilter, setActiveFilter] = useState(activePage);

    const handleMenuClick = (filter) => {
        setActiveFilter(filter);
    };

    const [linksOpen, setLinksOpen] = useState(false);

    const handleOpenLinks = () => {
        setLinksOpen(true);
    };

    const handleCloseLinks = () => {
        setLinksOpen(false);
    };
    const location = useLocation();

    const [previousLocation, setPreviousLocation] = useState('');
    useEffect(() => {
        if (previousLocation !== location.pathname) {
          setLinksOpen(false);
        }
        setPreviousLocation(location.pathname);
      }, [location, previousLocation]);

    return (
        <>
            {/* <!-- Navbar --> */}
            <nav className="theme-navbar" id="theme-navbar">
                <NoticeBar />
                <div className="container-fluid">
                    {/* <!-- nav-top --> */}
                    <div className="nav-top d-flex align-items-center">
                        {/* <!-- menu-icon --> */}
                        <div className="menu-icon" id="open-links-btn"  onClick={handleOpenLinks}>
                            <img src="/assets/images/templates/navbar/hamburger.png" className="menu-icon img-fluid" alt="TechX" />
                        </div>
                        {/* <!-- brand --> */}
                        <a href="#" className="brand d-flex align-items-center">
                            <img src="/assets/images/templates/navbar/logo-d.png" className="dt-img img-fluid" alt="TechX" />
                            <img src="/assets/images/templates/navbar/logo-l.png" className="lt-img img-fluid" alt="TechX" />
                        </a>
                        {/* <!-- options --> */}
                        <div className="options d-md-flex d-none align-items-center justify-content-end ml-auto">
                            {/* <!-- c-link --> */}
                            <a href="#" className="c-link">
                                <img src="/assets/images/templates/navbar/gear.png" className="icon" alt="icon" />
                                <span className="text">Shared Control Panel</span>
                            </a>
                            {/* <!-- c-link --> */}
                            <a href="#" className="c-link">
                                <img src="/assets/images/templates/navbar/network.png" className="icon" alt="icon" />
                                <span className="text">VPS Control Panel</span>
                            </a>
                            {/* <!-- buttons --> */}
                            <div className="buttons">
                                <a href="" className="btn btn-fill-primary btn-sm btn-rounded shadow-off text-uppercase mr--sm">Free Trial</a>
                                <a href="login.html" className="btn btn-outline-dark btn-sm btn-rounded shadow-off text-uppercase">Login</a>
                            </div>
                            {/* <!-- lang --> */}
                            <LanguageSelector />
                        </div>
                        {/* <!-- second-options --> */}
                        <div className="second-options d-md-none d-flex align-content-center justify-content-end ml-auto">
                            {/* <!-- o-link --> */}
                            <a href="kb.html" className="o-link">
                                <img src="/assets/images/templates/navbar/question-mark.png" className="icon" alt="Icon" />
                            </a>
                            {/* <!-- o-link --> */}
                            <div className="o-link user-link" id="user-menu-btn">
                                <img src="/assets/images/templates/navbar/profile.png" className="icon" alt="Icon" />
                                {/* <!-- user-dropdown-menu --> */}
                                <ul className="user-dropdown-menu list-unstyled" id="user-dropdown-menu">
                                    {/* <!-- uddm-link-parent --> */}
                                    <li className="uddm-link-parent">
                                        <div className="title-2">Registered Users</div>
                                        <p className="para-2">Have an account? Sign in now.</p>
                                        <a href="#" className="uddm-link">Sign In</a>
                                    </li>
                                    {/* <!-- uddm-link-parent --> */}
                                    <li className="uddm-link-parent">
                                        <div className="title-2">New Customer</div>
                                        <p className="para-2">New to TechX? Create an account to get started today.</p>
                                        <a href="#" className="uddm-link">Create an Account</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- o-link --> */}
                            <a href="#" className="o-link">
                                <img src="/assets/images/templates/navbar/cart.png" className="icon" alt="Icon" />
                            </a>
                        </div>
                    </div>
                    {/* <!-- nav-bottom --> */}
                    <div className="nav-bottom d-flex align-items-center justify-content-between">
                        {/* <!-- info --> */}
                        <div className="info d-flex align-items-center">
                            {/* <!-- item --> */}
                            <a href="tel:0000" className="item">
                                <img src="/assets/images/icons/fill-font-icons/fi-sr-phone-call.svg" className="img-fluid" alt="Icon" />
                                <span className="text">(+44) 738 798 9128</span>
                            </a>
                        </div>
                        {/* <!-- links --> */}
                        <div className={`links d-xl-flex align-items-center ml-auto ${linksOpen ? 'open-links': ''}`} id="theme-navbar-links">
                            {/* <!-- close-links-btn --> */}
                            <div className="close-links-btn" id="close-links-btn" onClick={handleCloseLinks}>
                                <img src="/assets/images/templates/navbar/close.png" className="img-fluid" alt="Close" />
                            </div>
                            {/* <!-- link --> */}
                            <div className={`link ${activeFilter === 'home' ? 'active' : ''}`} onClick={() => handleMenuClick('home')}>
                            
                                <Link to="/">Home</Link>
                            </div>
                            {/* <!-- link --> */}
                            <ServicesDropdown />
                            {/* <!-- link --> */}
                            <div className={`link ${activeFilter === 'shared-hosting' ? 'active' : ''}`} onClick={() => handleMenuClick('shared-hosting')}>
                                <Link to="/shared-hosting">Windows Hosting</Link>
                            </div>
                            {/* <!-- link --> */}
                            <div className={`link ${activeFilter === 'dedicated-server' ? 'active' : ''}`} onClick={() => handleMenuClick('dedicated-server')}>
                                <Link to="/dedicated-server">Windows VPS Hosting</Link>
                            </div>
                            <div className={`link ${activeFilter === 'support' ? 'active' : ''}`} onClick={() => handleMenuClick('support')}>
                                <Link to="/support">Support</Link>
                            </div>
                            {/* <!-- link --> */}
                            {/* <!-- link --> */}
                            <div className={`link ${activeFilter === 'contact' ? 'active' : ''}`} onClick={() => handleMenuClick('contact')}>
                                <Link to="/contact">Contact</Link>
                            </div>
                            {/* <!-- link --> */}
                            <div className={`link ${activeFilter === 'about' ? 'active' : ''}`} onClick={() => handleMenuClick('about')}>
                                <Link to="/about">About Us</Link>
                            </div>
                            {/* <!-- indicator --> */}
                            <span className="indicator"></span>
                        </div>
                        {/* <!-- side-box-btn --> */}
                        <div className="side-box-btn" id="side-box-btn" onClick={handleSideBoxToggle}>
                            <span className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>Products
                        </div>
                    </div>
                    {/* <!-- side-box --> */}
                    {isOpen && <SideBox handleSideBoxToggle={handleSideBoxToggle} />}
                </div>
            </nav>
        </>
    );
};

export default withRouter(Navbar);
