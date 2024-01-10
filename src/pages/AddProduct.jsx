import React, { useEffect, useState } from "react";

import stl from "./Signup/Signup.module.css";
import Button from "../components/UI/Button/Button";
import CalendarGroup from "../components/CalendarGroup/CalendarGroup";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/actions/productsACtions";
import { getAllColleges } from "../store/actions/CollegesActions";
import SelectGroup from "../components/UI/SelectGroup/SelectGroup";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
const today = new Date();

const nextDay = new Date(today);
nextDay.setDate(today.getDate() + 1);

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    start_price: "",
    img: null, // Use null for the file object
    college: "",
  });
  const [errors, setErrors] = useState({});

  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(nextDay);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colleges } = useSelector((state) => state.college);
  const { loading } = useSelector((state) => state.common);
  const { user } = useSelector((state) => state.user);
  const isLoggedIn = user?.token ? true : false;

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
  };

  const validateForm = () => {
    const {
      name,
      start_price,
      img, // Use null for the file object
      college,
    } = product;

    if (!name.trim()) {
      setErrors((prev) => ({
        ...prev,
        name: "product name is required",
      }));
    }

    if (!start_price.trim()) {
      setErrors((prev) => ({
        ...prev,
        start_price: "price is required",
      }));
    }

    if (!img) {
      setErrors((prev) => ({
        ...prev,
        img: "Image is required",
      }));
    }

    if (!college) {
      setErrors((prev) => ({
        ...prev,
        college: "College is required",
      }));
    }

    if (!fromDate) {
      setErrors((prev) => ({
        ...prev,
        start_data: "Start Date is required",
      }));
    }

    if (!toDate) {
      setErrors((prev) => ({
        ...prev,
        end_data: "End Date is required",
      }));
    }

    return (
      name.trim() && start_price.trim() && img && college && fromDate && toDate
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    console.log(product);

    // return;

    dispatch(
      addProduct(
        {
          fromDate: fromDate.toLocaleDateString(),
          toDate: toDate.toLocaleDateString(),
          ...product,
        },
        (data) => {
          navigate("/product/" + data.id);
        },
        setErrors
      )
    );
  };

  useEffect(() => {
    if (!isLoggedIn) return navigate("/user/login");
    dispatch(getAllColleges());
  }, []);

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className={`${stl.wrapper} ${stl.addPWrap}`}
      >
        <h1>Add Product</h1>

        <div>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className={errors.name ? stl.error : ""}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="start_price"
            placeholder="Price"
            value={product.start_price}
            onChange={handleChange}
            className={errors.start_price ? stl.error : ""}
          />
          {errors.start_price && <p>{errors.start_price}</p>}
        </div>

        <div className={stl.row}>
          <CalendarGroup
            label="Auction Start date"
            value={fromDate}
            onChange={setFromDate}
            className={stl.calender}
          />
          {errors.start_date && <p>{errors.start_date}</p>}

          <CalendarGroup
            label="Auction End date"
            value={toDate}
            onChange={setToDate}
            className={stl.calender}
            minDate={nextDay}
          />
          {errors.end_date && <p>{errors.end_date}</p>}
        </div>

        <div>
          <SelectGroup
            name="college"
            id="college"
            firstOption="college"
            options={colleges.map((college) => ({
              text: college.name,
              value: college.id,
              id: college.id,
            }))}
            value={product.college}
            onChange={handleChange}
            label="college"
            error={errors.college}
            className={stl.calender}
          />
        </div>

        <div>
          <label htmlFor="Description">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="img">Image</label>
          <input type="file" name="img" onChange={handleChange} />

          {errors.img && <p>{errors.img}</p>}
        </div>

        <Button className={stl.submit} loading={loading} type="submit">
          Add
        </Button>
      </form>
    </Layout>
  );
};

export default AddProductForm;
