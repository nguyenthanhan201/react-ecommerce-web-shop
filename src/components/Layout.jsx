import React, { useEffect } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../routes/Routes";
import Footer from "./Footer";
import Header from "./Header";
import ProductViewModel from "./ProductViewModel";
import ScrollTop from "./ScrollTop";
import SocialSidebar from "./SocialSidebar";

const Layout = () => {
  window.onload = function () {
    let progress = document.querySelector("#progressbar");
    // console.log(progress);

    window.onscroll = function () {
      let totalHeight = document.body.scrollHeight - window.innerHeight;
      let progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + "%";
    };
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="progressbar"></div>
      <div id="scrollPath"></div>
      <BrowserRouter>
        <ScrollTop />
        <Route
          render={(props) => (
            <>
              <div>
                <SocialSidebar />
                <Header {...props} />
                <div className="container">
                  <div className="main">
                    <Routes />
                  </div>
                </div>
                <Footer />
                <ProductViewModel />
                // ? Tao chatbox
                <MessengerCustomerChat
                  pageId="112923334536560"
                  appId="607798237303462"
                />
              </div>
            </>
          )}
        />
      </BrowserRouter>
    </>
  );
};

export default Layout;
