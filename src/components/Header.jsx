import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo-2.png";
import PostFiltersForm from "./PostFiltersForm";

const mainNav = [
  {
    display: "Trang Chủ",
    path: "/",
  },
  {
    display: "Sản Phẩm",
    path: "/catalog",
  },
  {
    display: "Phụ Kiện",
    path: "/accessories",
  },
  {
    display: "Liên Hệ",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  //? Dark Mode
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--main-bg", darkTheme ? "#262833" : "#fff");
    root?.style.setProperty("--main-color", darkTheme ? "#fff" : "#262833");
    root?.style.setProperty(
      "--txt-second-color",
      darkTheme ? "#fff" : "#8d8d8d"
    );
  }, [darkTheme]);

  const darkToggle = (e) => {
    e.preventDefault();
    const dark_toggle = document.querySelector(".dark_toggle");
    dark_toggle.classList.toggle("bx-sun");
    dark_toggle.classList.toggle("bx-moon");
  };

  //? Post Filters Form
  function handleFiltersChange(newFilters) {
    console.log(newFilters);
  }

  //? Search Form
  const toggleFormSearch = () => {
    document.querySelector(".wrapper-form-search").classList.toggle("active");
  };

  return (
    <>
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <div className="header" ref={headerRef}>
        <div className="container">
          <div className="header_logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header_menu">
            <div className="header_menu_mobile-toggle" onClick={menuToggle}>
              <i className="bx bx-menu-alt-left"></i>
            </div>
            <div className="header_menu_left" ref={menuLeft}>
              <div className="header_menu_left_close" onClick={menuToggle}>
                <i className="bx bx-chevron-left"></i>
              </div>
              {mainNav.map((item, index) => (
                <div
                  key={index}
                  className={`header_menu_item header_menu_left_item ${
                    index === activeNav ? "active" : ""
                  }`}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="header_menu_right">
              <div
                className="header_menu_item header_menu_right_item"
                onClick={darkToggle}
              >
                <i
                  className="dark_toggle bx bx-moon"
                  onClick={() => {
                    setDarkTheme(!darkTheme);
                  }}
                ></i>
              </div>
              <div className="header_menu_item header_menu_right_item">
                <i className="bx bx-search" onClick={toggleFormSearch}></i>
              </div>
              <div className="header_menu_item header_menu_right_item">
                <Link to="/cart">
                  <i className="bx bx-shopping-bag"></i>
                </Link>
              </div>
              <div className="header_menu_item header_menu_right_item">
                <i className="bx bx-user"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
