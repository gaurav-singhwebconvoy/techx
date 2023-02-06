import React, { useState, useEffect } from 'react';
import Features from "../../../Components/Features";


const ThemeSetting = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('theme') || 'light');
    const [isDesktopView, setIsDesktopView] = useState(false);

    useEffect(() => {
        const themeFromLocalStorage = localStorage.getItem('theme');
        if (themeFromLocalStorage) {
            setSelectedTheme(themeFromLocalStorage);
        }

        const desktopViewFromLocalStorage = localStorage.getItem('desktopView');
        if (desktopViewFromLocalStorage === 'true') {
            setIsDesktopView(true);
        }

    }, []);

    useEffect(() => {
       
        if(selectedTheme == "light"){
            document.body.classList.remove("dark-theme");
            document.body.classList.add('light-theme');
        }else{
            document.body.classList.remove("light-theme");
            document.body.classList.add('dark-theme');
        }

        localStorage.setItem('theme', selectedTheme);
    }, [selectedTheme]);

    useEffect(() => {
        localStorage.setItem('desktopView', isDesktopView);
    }, [isDesktopView]);

    const toggleSettings = () => {
        setIsOpen(!isOpen);
    };

    const closeSettings = () => {
        setIsOpen(false);
    };

    const handleThemeClick = (e, themeMode) => {
        
        setSelectedTheme(themeMode);
    };

    const handleDesktopViewClick = () => {
        setIsDesktopView(!isDesktopView);
    };
    return (
        <>
            {/* <!-- theme-settings-btn --> */}
            <button type="button" onClick={toggleSettings} className="theme-settings-btn" id="theme-settings-btn" data-tooltip="Theme Settings">
                <img src="/assets/images/templates/theme-settings/settings-sliders.svg" className="img-fluid" alt="Icon" />
            </button>

            {/* <!-- theme-settings --> */}
            <div className={`theme-settings ${isOpen ? "open" : ""}`} id="theme-settings">
                {/* <!-- title-1 --> */}
                <div className="title-1">Website setup</div>
                {/* <!-- close-btn --> */}
                <div className="close-btn" id="theme-settings-close-btn" onClick={closeSettings}>
                    <img src="/assets/images/templates/theme-settings/close.png" className="img-fluid" alt="Icon" />
                </div>
                {/* <!-- section --> */}
                <div className="section">
                    {/* <!-- section-title --> */}
                    <div className="section-title">Display</div>
                    {/* <!-- themes --> */}
                    <div className="themes">
                        {/* <!-- theme-btn --> */}
                        <div className={`theme-btn light-theme ${selectedTheme === "light" ? "active-theme" : ""}`} id="light-theme-btn" onClick={(e) => handleThemeClick(e, "light")}>
                            <div className="color"></div>
                            <span className="name">Light</span>
                        </div>
                        {/* <!-- theme-btn --> */}
                        <div className={`theme-btn dark-theme ${selectedTheme === "dark" ? "active-theme" : ""}`} id="dark-theme-btn" onClick={(e) => handleThemeClick(e, "dark")}>
                            <div className="color"></div>
                            <span className="name">Dark</span>
                        </div>
                    </div>
                </div>
                {/* <!-- section --> */}
                <Features/>
                {/* <!-- section --> */}
                <div className="section">
                    {/* <!-- section-title --> */}
                    <div className="section-title">Quick Links</div>
                    {/* <!-- q-link --> */}
                    <div className="q-link">
                        <a href="#">How to reset cookies?</a>
                    </div>
                    {/* <!-- q-link --> */}
                    <div className="q-link">
                        <a href="#">What about privacy policy?</a>
                    </div>
                    {/* <!-- q-link --> */}
                    <div className="q-link">
                        <a href="#">Can not reset server settings?</a>
                    </div>
                    {/* <!-- q-link --> */}
                    <div className="q-link">
                        <a href="#">How to upgrade my current plan?</a>
                    </div>
                    {/* <!-- q-link --> */}
                    <div className="q-link">
                        <a href="#">What is the different between .com and .net?</a>
                    </div>
                </div>
                {/* <!-- section --> */}
                <div className="section">
                    {/* <!-- section-title --> */}
                    <div className="section-title">Copyright</div>
                    {/* <!-- copyright-text --> */}
                    <p className="copyright-text">Copyright © 2021, TechX Operating Company, LLC. All Rights Reserved. The TechX word mark is a registered trademark of TechX Operating Company,</p>
                </div>
            </div>
        </>
    );
};

export default ThemeSetting;
