import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productData from "../assets/fake-data/products";
import { remove } from "../redux/product-modal/productModalSlice";
import Button from "./Button";
import ProductView from "./ProductView";

const ProductViewModel = () => {
  const productSlug = useSelector((state) => state.productModal.value);

  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  // const product = productData.getProductBySlug("quan-jean-phong-cach-18");

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    //? Neu product = undefined khong them class con lai them class active
    <div
      className={`product-view_modal ${product === undefined ? "" : "active"}`}
    >
      <div className="product-view_modal_content">
        <ProductView product={product} />
        <div className="product-view_modal_content_close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModel;
