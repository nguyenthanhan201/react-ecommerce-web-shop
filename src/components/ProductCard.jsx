import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import numberWithCommans from "../utils/numberWithCommans";
import Button from "./Button";

const ProductCard = (props) => {
  const all_shoesss = document.querySelectorAll(".shoesss");
  const child_shoes1 = document.querySelectorAll(".child-shoes1");
  const child_shoes2 = document.querySelectorAll(".child-shoes2");

  child_shoes1.forEach((item, index) => {
    item.handleClick = (e) => {
      e.preventDefault();
      alert("hi");
    };
  });

  function changeImageSrc(anything) {}
  return (
    <div className="product-card">
      <div className="container-product-card">
        <ul className="thumb">
          <li
            onMouseOver={() => changeImageSrc(props.img01)}
            className="child-shoes1"
          >
            <img src={props.img01} alt="img01" />
          </li>
          <li
            onMouseOver={() => changeImageSrc(props.img02)}
            className="child-shoes2"
          >
            <img src={props.img02} alt="img02" />
          </li>
        </ul>
        <div className="imgBox">
          <h2>{props.name}</h2>
          <Link to={`/catalog/${props.slug}`}>
            <img src={props.img01} alt="img" className="shoesss" />
          </Link>
          <ul className="size">
            <span>Giá</span>
            <li>{numberWithCommans(props.price)}&#x00111;</li>
            <li>
              <del>{numberWithCommans(399000)} &#x00111;</del>
            </li>
          </ul>
          <Button size="sm" icon="bx bx-cart" animate={true}>
            chọn mua
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
