import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductsId } from "../../store/actions/productsACtions";
import stl from "./ProductPage.module.css";
import Layout from "../../components/Layout/Layout";
import Countdown from "react-countdown";
import Timer from "../../components/Timer/Timer";
import BiddingComponent from "../../components/BiddingComponent/BiddingComponent";

export const checkDatePeriodStatus = (startDateString, endDateString) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const currentDate = new Date();

  if (startDate > endDate) {
    // Handle invalid date range
    return "Invalid date range";
  }

  if (currentDate < startDate) {
    return "Future";
  } else if (currentDate > endDate) {
    return "Past";
  } else {
    return "Present";
  }
};

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.common);
  const [productDateStatus, setProductDateStatus] = useState("");
  const isLoggedIn = user?.token ? true : false;

  console.log(isLoggedIn);

  useEffect(() => {
    dispatch(getProductsId(id));
  }, []);

  useEffect(() => {
    if (Object.keys(product).length === 0) return;

    setProductDateStatus(
      checkDatePeriodStatus(product.start_date, product.end_date)
    );
  }, [product]);

  const renderer = () => {
    if (productDateStatus === "Future")
      return (
        <Timer
          stl={stl}
          date={product.start_date}
          onComplete={() => {
            window.location.reload();
          }}
        />
      );

    if (productDateStatus === "Present")
      return <BiddingComponent product={product} />;

    return (
      <div className={stl.soldWrapper}>
        <h1>sold</h1>
        <strong>
          <span style={{ color: "#00b362" }}>Final Price</span>{" "}
          {product.current_price ? product.current_price : product.start_price}
          JD
        </strong>
      </div>
    );
  };

  if (loading) return "loading";

  return (
    <Layout>
      <div className={` ${stl.ProdWrap}`}>
        <div className={stl.detailsSection}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <strong>
            <span style={{ color: "#00b362" }}>Start Price</span>{" "}
            {product.start_price} JD
          </strong>

          <img className={stl.img} src={product.img} alt="" />
        </div>
        <div className={stl.biddingSection}>
          {isLoggedIn ? (
            renderer()
          ) : (
            <div className={stl.userWrapper}>
              <h2>please login to bid</h2>
              <Link to="/user/login">login</Link>
            </div>
          )}
        </div>
      </div>
      ;
    </Layout>
  );
};

export default ProductPage;
