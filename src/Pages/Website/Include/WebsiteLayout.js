import React, { useEffect, useState } from 'react';
import { withRouter, useHistory, Route, Switch } from "react-router-dom";
import * as Comp from "./Index";
import Loader from './Loader';
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';
import Navbar from './Navbar';
import Page404 from '../Page404';

function WebsiteLayout(props) {
  const history = useHistory();
  
  const [isShowLoader, setIsShowLoader] = useState(0)
 
  const hideShowLoader = async (isshow = 0) => {
    setIsShowLoader(isshow);
  }

  return (
    <>
      <Preloader/>
      <Navbar/>
      
      <>
        <Loader stateLoader={isShowLoader}/>
        <Switch>
          
          <Route path="/" exact component={Comp.Home} pageLoader={hideShowLoader}/>
          <Route path="/shared-hosting" exact component={Comp.SharedHosting} pageLoader={hideShowLoader}/>
          <Route path="/vps-hosting" exact component={Comp.VPSHosting} pageLoader={hideShowLoader}/>
          <Route path="/dedicated-server" exact component={Comp.DedicatedServer} pageLoader={hideShowLoader}/>
          <Route path="/support" exact component={Comp.Support} pageLoader={hideShowLoader}/>
          <Route path="/contact" exact component={Comp.Contact} pageLoader={hideShowLoader}/>
          <Route path="/about" exact component={Comp.About} pageLoader={hideShowLoader}/>
          <Route path="/terms" exact component={Comp.Terms} pageLoader={hideShowLoader}/>
          <Route path="/cyber-security" exact component={Comp.CyberSecurity} pageLoader={hideShowLoader}/>
          <Route path="/domains" exact component={Comp.Domains} pageLoader={hideShowLoader}/>
          <Route path="/404" exact component={Comp.Page404} pageLoader={hideShowLoader}/>
          {/* <Route path="/usecase" exact component={Comp.Usecase} pageLoader={hideShowLoader}/>  */}

          <Route render={() => <Page404/>} />
          
          {/* <Route path="/" component={Comp.Home} /> */}
        
        </Switch>
      </>
      <Footer />
    </>
  );
}

export default withRouter(WebsiteLayout);