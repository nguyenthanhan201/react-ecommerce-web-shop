import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Button from './Button'

import numberWithCommans from '../utils/numberWithCommans'
//Tạo tự động thêm danh sách sản phẩm
const ProductCard = props => {
  return (
    <div className="product-card">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card_image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
        <h3 className="product-card_name">{props.name}</h3>
        <div className="product-card_price">
          {numberWithCommans(props.price)} &#x00111;
          <span className="product-card_price_old">
            <del>{numberWithCommans(399000)} &#x00111;</del>
          </span>
        </div>
      </Link>
      <div className="product-card_btn">
        <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
        >
          chọn mua
        </Button>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
}

export default ProductCard
