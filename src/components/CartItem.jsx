import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateItem, removeItem } from "../redux/shopping-cart/cartItemsSlide";
import numberWithCommans from "../utils/numberWithCommans";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (opt) => {
    if (opt === "+") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
      // setQuantity(quantity + 1);
    }
    if (opt === "-") {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 })
      );
      // setQuantity(quantity - 1 === 0 ? 1 : quantity - 1);
    }
  };

  const removeCartItem = () => {
    dispatch(removeItem(item));
    // console.log("removeCart");
  };

  return (
    <div className="cart_item">
      <div className="cart_item_image">
        <img src={item.product.image01} alt="" />
      </div>
      <div className="cart_item_info">
        <div className="cart_item_info_name">
          <Link to={`/catalog/${item.slug}`}>
            {`${item.product.title} - ${item.color} - ${item.size}`}
          </Link>
        </div>
        <div className="cart_item_info_price">
          {numberWithCommans(Number(item.product.price))}
        </div>
        <div className="cart_item_info_quantity">
          <div className="product_info_item_quantity">
            <div
              className="product_info_item_quantity_btn"
              onClick={() => updateQuantity("-")}
            >
              -
            </div>
            <div className="product_info_item_quantity_input">{quantity}</div>
            <div
              className="product_info_item_quantity_btn"
              onClick={() => updateQuantity("+")}
            >
              +
            </div>
          </div>
        </div>
        <div className="cart_item_info_del">
          <i className="bx bx-trash" onClick={() => removeCartItem()}></i>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
