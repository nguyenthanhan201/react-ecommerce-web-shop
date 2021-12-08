import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import productData from "../assets/fake-data/products";

const PostFiltersForm = (props) => {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  // ?Set searchTerm tinh lan cuoi go 300
  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchTerm: value,
      };
      onSubmit(formValue);
    }, 300);
  };

  let dataSearch = productData.data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase())
    );
  });

  const toggleFormSearch = () => {
    document.querySelector(".wrapper-form-search").classList.toggle("active");
  };

  return (
    <div className="wrapper-form-search">
      <form className="form-search">
        <p className="form-search_icon">
          <i className="bx bx-x" onClick={toggleFormSearch}></i>
        </p>
        <p className="label">Search something</p>
        <div className="input-box">
          <input
            className=""
            type="text"
            onChange={handleSearchTermChange}
          ></input>
        </div>
        <div className="form-search_result">
          {dataSearch.map((item) => (
            <div className="form-search_result_line" key={item.title}>
              <img
                className="form-search_result_line_image"
                src={item.image01}
                alt="hoa"
              />
              <Link to={`/catalog/${item.slug}`}>
                <p style={{ fontSize: "20px" }}>{item.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

export default PostFiltersForm;
