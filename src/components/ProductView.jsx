import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
//? Import custom alert
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItem } from "../redux/shopping-cart/cartItemsSlide";
import numberWithCommans from "../utils/numberWithCommans";
import Button from "./Button";

const ProductView = (props) => {
  const dispatch = useDispatch();

  let product = props.product;

  if (product === undefined)
    product = {
      price: 0,
      title: "",
      colors: [],
      size: [],
    };

  const [previewImg, setReviewImg] = useState(product.image01);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (types) => {
    if (types === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setReviewImg(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
    customRightResult();
  }, [product]);

  useEffect(() => {
    imageZoom("myimage", "myresult");
  }, [previewImg]);

  const check = () => {
    if (color === undefined) {
      // alert('Vui lòng chọn màu');
      toast.warn("Vui lòng chọn màu!", {
        position: "top-right",
      });
      return false;
    }
    if (size === undefined) {
      // alert('Vui lòng chọn kích thước');
      toast.warn("Vui lòng chọn kích thước!", {
        position: "top-right",
      });
      return false;
    }
    return true;
  };

  const addToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: product.price,
        })
      );
      toast.success("Thêm giỏ hàng thành công", {
        position: "top-right",
      });
    }
  };

  const goToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: product.price,
        })
      );
      props.history.push("/cart");
    }
  };

  const gotoCart = () => {
    if (check()) props.history.push("/cart");
  };

  function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize =
      img.width * cx + "px " + img.height * cy + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }

  function customRightResult() {
    window.addEventListener("load", () => {
      var elementResult = document.querySelector("#myresult");

      // ?Lay cac phan tu tinh toan do dai zoom_result
      var container = Array.from(document.getElementsByClassName("container"));
      // console.log(container[1].clientWidth);
      var product_image = document.querySelector(".product_image");
      var num = (product_image.clientWidth * 100) / container[1].clientWidth;
      // console.log("phan tram cua product_image:" + num.toFixed());

      var widthOfResult = 98 - num.toFixed();
      // console.log("phan tram cua result:" + widthOfResult);

      if (typeof elementResult != "undefined") {
        if (widthOfResult > 51) {
          widthOfResult = 51;
          elementResult.style.width = widthOfResult + "%";
        } else {
          elementResult.style.width = widthOfResult + "%";
        }
      }
    });
  }

  window.addEventListener("load", () => {
    imageZoom("myimage", "myresult");
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="product">
        <div className="product_image">
          <div className="product_image_list">
            <div
              className="product_image_list_item"
              onClick={() => {
                setReviewImg(product.image01);
              }}
            >
              <img src={product.image01} alt="" />
            </div>
            <div
              className="product_image_list_item"
              onClick={() => {
                setReviewImg(product.image02);
              }}
            >
              <img src={product.image02} alt="" />
            </div>
          </div>
          {/* <div className="product_image_list_main">
            <img src={previewImg} alt="" id="myimage" />
            <div id="myresult" class="img-zoom-result"></div>
          </div> */}
          <div className="img-zoom-container">
            <img id="myimage" src={previewImg} alt="" width="95%" />
            <div id="myresult" className="img-zoom-result"></div>
          </div>

          <div
            className={`product-description ${
              descriptionExpand ? "expand" : ""
            }`}
          >
            <div className="product-description_title">Chi tiết sản phẩm</div>
            <div
              className="product-description_content"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            <div className="product-description_toggle">
              <Button
                size="sm"
                onClick={() => setDescriptionExpand(!descriptionExpand)}
              >
                {descriptionExpand ? "Thu gọn" : "Xem thêm"}
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
            <div className="product_info_item_title">Màu sắc</div>
            <div className="product_info_item_list">
              {product.colors.map((item, index) => (
                <div
                  key={index}
                  className={`product_info_item_list_item ${
                    color === item ? "active" : ""
                  }`}
                  onClick={() => setColor(item)}
                >
                  <div className={`circle bg-${item}`}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="product_info_item">
            <div className="product_info_item_title">Kích cỡ</div>
            <div className="product_info_item_list">
              {product.size.map((item, index) => (
                <div
                  key={index}
                  className={`product_info_item_list_item ${
                    size === item ? "active" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  <div className="product_info_item_list_item_size">{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="product_info_item">
            <div className="product_info_item_title">Số lượng</div>
            <div className="product_info_item_quantity">
              <div
                className="product_info_item_quantity_btn"
                onClick={() => updateQuantity("minus")}
              >
                {/* <i className="bx bx-minus"></i> */}-
              </div>
              <div className="product_info_item_quantity_input">{quantity}</div>
              <div
                className="product_info_item_quantity_btn"
                onClick={() => updateQuantity("plus")}
              >
                {/* <i className="bx bx-plus"></i> */}+
              </div>
            </div>
          </div>
          <div className="product_info_item">
            <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
            <Button onClick={() => gotoCart()}>mua ngay</Button>
          </div>
        </div>
        <div
          className={`product-description mobile ${
            descriptionExpand ? "expand" : ""
          }`}
        >
          <div className="product-description_title">Chi tiết sản phẩm</div>
          <div
            className="product-description_content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description_toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default withRouter(ProductView);
