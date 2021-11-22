import React,{useState} from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Button from './Button'

import numberWithCommans from '../utils/numberWithCommans'

const ProductCard = props => {

  const [sourceURL,setSourceURL] = useState(props.img01);

  return (
    <div className="product-card">
      <div className="container-product-card">
        <ul className="thumb">
          <li className='child-shoes'><img src={props.img01} alt="img01" onClick={()=> setSourceURL(props.img01)}/></li>
          <li className='child-shoes'><img src={props.img02} alt="img02" onClick={()=> setSourceURL(props.img02)}/></li>
        </ul>
        <div className="imgBox">
          <h2>{props.name}</h2>
          <Link to={`/catalog/${props.slug}`}>
            <img src={sourceURL} alt="img" className="shoesss"/>
          </Link>
          <ul className="size">
            <span>Giá</span>
            <li>{numberWithCommans(props.price)}&#x00111;</li>
            <li><del>{numberWithCommans(399000)} &#x00111;</del></li>
          </ul>
          <Button
            size="sm"
            icon="bx bx-cart"
            animate={true}
          >
            chọn mua
          </Button>
        </div>
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
