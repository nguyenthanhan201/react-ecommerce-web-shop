import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { withRouter } from "react-router";

import Button from "./Button"
import numberWithCommans from "../utils/numberWithCommans";

const ProductView = (props) => {
  const product = props.product;

  const [previewImg, setReviewImg] = useState(product.image01);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (types) => {
    if (types === 'plus') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }
  }

  useEffect(() => {
    setReviewImg(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product])

  const check = () => {
    if (color === undefined) {
      alert('Vui lòng chọn màu');
      return false;
    } if (size === undefined) {
      alert('Vui lòng chọn kích thước');
      return false;
    }
    return true;
  }

  const addToCart = () => {
    if (check()) console.log({ color, size, quantity });
  }

  const gotoCart = () => {
    if (check()) props.history.push('/cart')
  }

  return (
    <div className='product'>
      <div className="product_image">
        <div className="product_image_list">
          <div className="product_image_list_item" onClick={() => setReviewImg(product.image01)}>
            <img src={product.image01} alt="" />
          </div>
          <div className="product_image_list_item" onClick={() => setReviewImg(product.image02)}>
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product_image_list_main">
          <img src={previewImg} alt="" />
        </div>
        <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
          <div className="product-description_title">
            Chi tiết sản phẩm
          </div>
          <div className="product-description_content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
          <div className="product-description_toggle">
            <Button size='sm' onClick={() => setDescriptionExpand(!descriptionExpand)}>
              {
                descriptionExpand ? 'Thu gọn' : 'Xem thêm'
              }
            </Button>
          </div>
        </div>
      </div>
      <div className="product_info">
        <h1 className="product_info_title">{product.title}</h1>
        <div className="product_info_item">
          <span className="product_info_item_price">
            {numberWithCommans(product.price)}
          </span>
        </div>
        <div className="product_info_item">
          <div className="product_info_item_title">
            Màu sắc
          </div>
          <div className="product_info_item_list">
            {
              product.colors.map((item, index) => (
                <div key={index} className={`product_info_item_list_item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                  <div className={`circle bg-${item}`}></div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="product_info_item">
          <div className="product_info_item_title">
            Kích cỡ
          </div>
          <div className="product_info_item_list">
            {
              product.size.map((item, index) => (
                <div key={index} className={`product_info_item_list_item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                  <div className="product_info_item_list_item_size">
                    {item}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="product_info_item">
          <div className="product_info_item_title">
            Số lượng
          </div>
          <div className="product_info_item_quantity">
            <div className="product_info_item_quantity_btn" onClick={() => updateQuantity('minus')}>
              <i className="bx bx-minus"></i>
            </div>
            <div className="product_info_item_quantity_input">
              {quantity}
            </div>
            <div className="product_info_item_quantity_btn" onClick={() => updateQuantity('plus')}>
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product_info_item">
          <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
          <Button onClick={() => gotoCart()}>mua ngay</Button>
        </div>
      </div>
      <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
        <div className="product-description_title">
          Chi tiết sản phẩm
        </div>
        <div className="product-description_content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
        <div className="product-description_toggle">
          <Button size='sm' onClick={() => setDescriptionExpand(!descriptionExpand)}>
            {
              descriptionExpand ? 'Thu gọn' : 'Xem thêm'
            }
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default withRouter(ProductView);
