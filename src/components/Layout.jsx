import React,{useEffect} from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import MessengerCustomerChat from 'react-messenger-customer-chat';

import Header from './Header'
import Footer from './Footer'
import SocialSidebar from './SocialSidebar'

import Routes from '../routes/Routes'
import ScrollTop from './ScrollTop';

const Layout = () => {
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
    <BrowserRouter>
    <ScrollTop/>
      <Route render={props => (
        <>
        <div>                  
          <SocialSidebar />
          <Header {...props} />
          <div className="container">
            <div className="main">
              <Routes/>
            </div>
          </div>
          <Footer />
          <MessengerCustomerChat
            pageId="112923334536560"
            appId="607798237303462"
          />
        </div>
        </>
      )} />
    </BrowserRouter>
  )
}

export default Layout
