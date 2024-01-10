import axios from "axios";
import fetcher from "../../axios";
import { setLoading } from "../slices/commonSlice";
import { getProduct, getProducts } from "../slices/productSlice";
import qs from "qs";

export const getProductsByCollegeId = (id, cb, fcb) => async (dispatch) => {
  dispatch(setLoading(true));

  const res = await fetcher.get(`products/by-college/${id}`);

  if (res.data) {
    dispatch(getProducts(res.data.data));

    //   cb();
  }

  dispatch(setLoading(false));
};

export const getProductsId = (id, cb, fcb) => async (dispatch) => {
  dispatch(setLoading(true));

  const res = await fetcher.get(`products/${id}`);

  if (res.data) {
    dispatch(getProduct(res.data.data));

    //   cb();
  }

  dispatch(setLoading(false));
};

export const updateProductsId = (id, newPrice, cb) => async (dispatch) => {
  dispatch(setLoading(true));

  var data = qs.stringify({
    current_price: newPrice,
  });

  var config = {
    method: "put",
    url: `http://127.0.0.1:8000/api/products/${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config).then(function (response) {
    cb();
  });

  dispatch(setLoading(false));
};

export const addProduct = (product, cb, fcb) => async (dispatch) => {
  dispatch(setLoading(true));

  const formData = new FormData();

  formData.append("name", product.name);
  formData.append("description", product.description);
  formData.append("start_price", product.start_price);
  formData.append("img", product.img);
  formData.append("start_date", product.fromDate);
  formData.append("end_date", product.toDate);
  formData.append("college_id", product.college);

  const res = await fetcher.post("products", formData);

  if (res.data.errors) {
    const errors = {};
    Object.entries(res.data.errors).forEach(([key, value]) => {
      errors[key] = value[0];
    });
    dispatch(setLoading(false));

    return fcb(errors);
  }

  if (res.data) {
    dispatch(setLoading(false));

    cb(res.data);
  }
};
