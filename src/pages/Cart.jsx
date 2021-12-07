import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productData from "../assets/fake-data/products";
import Button from "../components/Button";
import Helmet from "../components/Helmet";
import numberWithCommans from "../utils/numberWithCommans";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState([]);

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsDetail(cartItems));
    setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0));
    setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)),0));
  }, [cartItems]);

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart_info">
          <div className="cart_info_txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart_info_txt_price">
              <span>Thành tiền</span>
              <span>{numberWithCommans(totalPrice)}</span>
            </div>
          </div>
          <div className="cart_info_btn">
            <Button size="block">đặt hàng</Button>
            <Link to="/catalog">
              <Button size="block">tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart_list">
          {
            cartProducts.map((item,index) =>(
              <CartItem key={index} item={item}/>
            ))
          }
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
