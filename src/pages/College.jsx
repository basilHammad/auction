import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsByCollegeId } from "../store/actions/productsACtions";
import Layout from "../components/Layout/Layout";
import ProductCard from "../components/ProductCard/ProductCard";

const College = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsByCollegeId(id));
  }, []);
  return (
    <Layout>
      <div
        className={"container"}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </Layout>
  );
};

export default College;
