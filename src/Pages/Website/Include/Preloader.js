import { useEffect } from "react";

const Preloader = (props) => {
  useEffect(() => {
    window.addEventListener("load", function () {
    document.querySelector("#preloader").style.display = "none";
    });
    }, []);
  return (
    <>
      {/* <!-- Preloader --> */}
        <div className="preloader" id="preloader">
            <div className="content d-flex align-items-center justify-content-center">
            <div className="spinner"></div>
            </div>
        </div> 
    </>
  );
};

export default Preloader;
