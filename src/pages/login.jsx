import React from "react";

function login() {
  return (
    <div className="containerlogin1">
      <div>
        <title>Space Login Form Flat Responsive Widget Template </title>
        {/* Meta tag Keywords */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="keywords"
          content="Space Login Form Responsive Widget,Login form widgets, Sign up Web forms , Login signup Responsive web form,Flat Pricing table,Flat Drop downs,Registration Forms,News letter Forms,Elements"
        />
        {/* Meta tag Keywords */}
        {/* css files */}
        <link
          href="css/style.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        {/* css files */}
        {/* Online-fonts */}
        <link
          href="//fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=latin-ext,vietnamese"
          rel="stylesheet"
        />
        {/* //Online-fonts */}
        {/* main */}
        <div className="main">
          <div className="main-w3l">
            <h1 className="logo-w3">Space Login Form</h1>
            <div className="Huynh-main">
              <h2>
                <span>Login now</span>
              </h2>
              <div className="social">
                <a href="/#">Login With Facebook</a>
              </div>
              <h3>(or)</h3>
              <form action="#" method="post" className="Huynh-form">
                <input
                  placeholder="Username or Email "
                  name="Email"
                  type="email"
                  required
                />
                <input
                  placeholder="Password"
                  name="Password"
                  type="password"
                  required
                />
                <input type="submit" defaultValue="Get Started" name="login" />
              </form>
              <h6>
                <a href="/#">Lost Your Password?</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
