import { useState } from "react";
import Countdown from "react-countdown";
import { MdAddBox } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  getProductsId,
  updateProductsId,
} from "../../store/actions/productsACtions";
import stl from "./BiddingComponent.module.css";
import Button from "../UI/Button/Button";

const BiddingComponent = ({ product }) => {
  const [value, setValue] = useState(
    product.current_price ? product.current_price : product.start_price
  );
  const [errors, setErrors] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setErrors("");
    setValue(e.target.value);
  };

  const handleAutoBid = () => {
    setErrors("");

    setValue((pre) => Math.floor(+pre * 0.1 + +pre));
  };

  const handleUpdateProduct = () => {
    if (+value <= product.start_price || +value <= product.current_price)
      return setErrors("invalid price");
    dispatch(
      updateProductsId(product.id, value, () =>
        dispatch(getProductsId(product.id))
      )
    );
  };

  return (
    <div className={stl.wrapper}>
      <h1>Place Your Bids Now</h1>
      <strong>
        <span style={{ color: "#00b362" }}>Start Price:</span>{" "}
        {product.start_price} JD
      </strong>
      <strong>
        <span style={{ color: "#00b362" }}>Current Price:</span>{" "}
        {product.current_price ? product.current_price : product.start_price} JD
      </strong>
      <strong>
        <span style={{ color: "#00b362" }}>Time Left:</span>{" "}
        <Countdown
          date={product.end_date}
          renderer={({ hours, minutes, seconds, days }) => (
            <strong>
              {days}:{hours}:{minutes}:{seconds}
            </strong>
          )}
          onComplete={() => dispatch(getProductsId(product.id))}
        />
      </strong>

      <div>
        <div className={stl.inputWrapper}>
          <button onClick={handleAutoBid}>
            <MdAddBox />
          </button>
          <input type="number" value={value} onChange={handleChange} />
        </div>
        {errors && <p className={stl.error}>{errors}</p>}
        <Button
          className={stl.submit}
          loading={false}
          onClick={handleUpdateProduct}
        >
          Bid
        </Button>
      </div>
    </div>
  );
};

export default BiddingComponent;
