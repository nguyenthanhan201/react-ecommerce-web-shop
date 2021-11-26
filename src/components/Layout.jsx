import React, { useEffect } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../routes/Routes";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
import SocialSidebar from "./SocialSidebar";

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
              <MessengerCustomerChat
                pageId="112923334536560"
                appId="607798237303462"
              />
            </div>
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
