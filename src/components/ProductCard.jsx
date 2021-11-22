import PropTypes from "prop-types";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import numberWithCommans from "../utils/numberWithCommans";
import Button from "./Button";

const ProductCard = (props) => {
  const [sourceURL, setSourceURL] = useState(props.img01);

  return (
    <div className="product-card">
      <div className="container-product-card">
        <ul className="thumb">
          <li className="child-shoes">
            <LazyLoadImage
              src={props.img01}
              alt="img01"
              onClick={() => setSourceURL(props.img01)}
              effect="blur"
              height="80%"
              width="80%"
              delayTime={500}
              placeholderSrc={process.env.PUBLIC_URL + "/logo192.png"}
            />
          </li>
          <li className="child-shoes">
            <LazyLoadImage
              src={props.img02}
              alt="img02"
              onClick={() => setSourceURL(props.img02)}
              effect="blur"
              height="80%"
              width="80%"
              delayTime={500}
              placeholderSrc={process.env.PUBLIC_URL + "/logo192.png"}
            />
          </li>
        </ul>
        <div className="imgBox">
          <h2>{props.name}</h2>
          <Link to={`/catalog/${props.slug}`}>
            <LazyLoadImage
              src={sourceURL}
              alt="img"
              effect="blur"
              className="shoess"
              // height="80%"
              // width="80%"
              delayTime={500}
              placeholderSrc={process.env.PUBLIC_URL + "/logo192.png"}
            />
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
