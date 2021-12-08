import React, { useCallback, useState, useEffect, useRef } from "react";

import Helmet from "../components/Helmet";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";

import productData from "../assets/fake-data/products";
import category from "../assets/fake-data/category";
import colors from "../assets/fake-data/product-color";
import size from "../assets/fake-data/product-size";
import InfinityList from "../components/InfinityList";

function login() {
  return <div className="container">
  <div className="materialContainer">
        <div className="box">
          <div className="title">LOGIN</div>
          <div className="input">
            <label htmlFor="name">Username</label>
            <input type="text" name="name" id="name" />
            <span className="spin" />
          </div>
          <div className="input">
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" />
            <span className="spin" />
          </div>
          <div className="button login">
            <button><span>GO</span> <i className="fa fa-check" /></button>
          </div>
          <a href className="pass-forgot">Forgot your password?</a>
        </div>
        <div className="overbox">
          <div className="material-button alt-2"><span className="shape" /></div>
          <div className="title">REGISTER</div>
          <div className="input">
            <label htmlFor="regname">Username</label>
            <input type="text" name="regname" id="regname" />
            <span className="spin" />
          </div>
          <div className="input">
            <label htmlFor="regpass">Password</label>
            <input type="password" name="regpass" id="regpass" />
            <span className="spin" />
          </div>
          <div className="input">
            <label htmlFor="reregpass">Repeat Password</label>
            <input type="password" name="reregpass" id="reregpass" />
            <span className="spin" />
          </div>
          <div className="button">
            <button><span>NEXT</span></button>
          </div>
        </div>
      </div>
</div>;
}


export default login;
