import React from 'react'

import { Link } from 'react-router-dom';

import Grid from './Grid';

import logo from '../assets/images/Logo-2.png'
// Thêm CSS và tạo bố cục Footer 
const footerAboutLinks = [
  {
    display: "Giới Thiệu",
    path: "/about"
  },
  {
    display: "Liên Hệ",
    path: "/about"
  },
  {
    display: "Tuyển Dụng",
    path: "/about"
  },
  {
    display: "Tin Tức",
    path: "/about"
  },
  {
    display: "Hệ Thống Của Hàng",
    path: "/about"
  }
]

const footerCustomerLinks = [
  {
    display: "Chính Sách Đổi Trả",
    path: "/about"
  },
  {
    display: "Chính Sách Bảo Hành",
    path: "/about"
  },
  {
    display: "Chính Sách Hoàn Tiền",
    path: "/about"
  }
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer_title">
            Tổng Đài Hỗ Trợ
          </div>
          <div className="footer_content">
            <p>
              Thắc mắc đơn hàng <strong>01234567</strong>
            </p>
            <p>
              Thắc mắc đơn hàng <strong>01234567</strong>
            </p>
            <p>
              Thắc mắc đơn hàng <strong>01234567</strong>
            </p>
          </div>
          </div>
          <div>
            <div className="footer_title">
            Về Yolo
          </div>
          <div className="footer_content">
            {
              footerAboutLinks.map((item,index) =>(
                <p key={index}>
                  <Link to={item.path}>
                    {item.display}
                  </Link>
                </p>
              )
            )}
          </div>
          </div>
          <div>
            <div className="footer_title">
            Chăm Sóc Khách Hàng
          </div>
          <div className="footer_content">
            {
              footerCustomerLinks.map((item,index) =>(
                <p key={index}>
                  <Link to={item.path}>
                    {item.display}
                  </Link>
                </p>
              ))
            }
          </div>
          </div>
          <div className="footer_about">
            <p>
              <Link to="/">
                <img src={logo} className="footer_logo" alt="" />
              </Link>
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium commodi perspiciatis dolores ipsam ipsa tempore, inventore sapiente quidem incidunt odit!
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer;
