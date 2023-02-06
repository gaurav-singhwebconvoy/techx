import { useEffect } from "react";

const NoticeBar = (props) => {

    // Notices Bar Cookie
    useEffect(() => {
        if (document.cookie.indexOf("notices-bar=true") >= 0) {
            if (document.querySelector('#notices-bar') != null) {
                document.querySelector('#notices-bar').style.display = "none";
            }
        }
    }, []);
    const clickOnClose = ()=> {
        document.cookie = "notices-bar=true;";
        document.querySelector('#notices-bar').style.display = "none";
    }

    return (
        <>
            {/* <!-- notices-bar --> */}
            <div className="notices-bar" id="notices-bar">
                <div className="container-fluid">
                    {/* <!-- content --> */}
                    <div className="content">
                        {/* <!-- text --> */}
                        <p className="text">TechX Special Deals! Save 75% on all Shared Hosting Plans & Locations</p>
                        {/* <!-- action-btn --> */}
                        <a href="#" className="action-btn">Buy Now</a>
                        {/* <!-- close-btn --> */}
                        <div className="close-btn" id="close-notices-bar-btn" onClick={clickOnClose}>
                            <img src="/assets/images/templates/navbar/close.png" className="img-fluid" alt="Down Arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NoticeBar;
