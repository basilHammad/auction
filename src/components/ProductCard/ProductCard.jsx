import React from "react";
import { Link } from "react-router-dom";
import stl from "./ProductCard.module.css";
import { checkDatePeriodStatus } from "../../pages/ProductPage/ProductPage";

const ProductCard = ({ product }) => {
  const productStatus = checkDatePeriodStatus(
    product.start_date,
    product.end_date
  );
  return (
    <Link className={stl.wrapper} to={`/product/${product.id}`}>
      <img src={product.img} alt="" />
      <div>
        <div className={stl.title}>
          <strong className={stl.pName}>{product.name}</strong>
          {product.final_price ? (
            <strong className={stl.pPrice}>
              Sold {product.final_price} JD
            </strong>
          ) : (
            <strong className={stl.pPrice}>{product.start_price} JD</strong>
          )}
        </div>
        <p>{product.description}</p>
        <div className={stl.time}>
          {productStatus === "Past" ? (
            <strong>
              <span>Sold Out</span>
            </strong>
          ) : null}
          {productStatus === "Present" ? (
            <>
              <strong>
                <span>Starts in</span> Started
              </strong>
              <strong>
                <span>Ends in</span> {product.end_date}
              </strong>
            </>
          ) : null}
          {productStatus === "Future" ? (
            <>
              <strong>
                <span>Starts in</span> {product.start_date}
              </strong>
              <strong>
                <span>Ends in</span> {product.end_date}
              </strong>
            </>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
