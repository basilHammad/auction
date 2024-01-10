import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/actions/userACtions";
import { Link, useNavigate } from "react-router-dom";

import stl from "./Signup.module.css";
import Button from "../../components/UI/Button/Button";
import Layout from "../../components/Layout/Layout";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.common);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { name, email, password, password_confirmation } = values;

    if (!name.trim()) {
      setErrors((prev) => ({
        ...prev,
        name: "name is required",
      }));
    }

    if (!email.trim() || !email.includes("@")) {
      setErrors((prev) => ({
        ...prev,
        email: "Enter a valid email",
      }));
    }

    if (!password.trim()) {
      setErrors((prev) => ({
        ...prev,
        password: "Password is required",
      }));
    }

    if (password_confirmation !== password) {
      console.log("test");
      setErrors((prev) => ({
        ...prev,
        password_confirmation: "Password confirmation must match the password",
      }));
    }

    return (
      name.trim() &&
      email.trim() &&
      email.includes("@") &&
      password.trim() &&
      password_confirmation === password
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    dispatch(
      register(
        values,
        () => {
          navigate("/");
        },
        setErrors
      )
    );
  };

  useEffect(() => {
    const isLogedIn = user?.token;
    if (isLogedIn) {
      navigate("/");
    }
  }, []);

  return (
    <Layout>
      <form onSubmit={handleSubmit} className={stl.wrapper}>
        <h1>Signup</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            className={errors.name ? stl.error : ""}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            className={errors.email ? stl.error : ""}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            className={errors.password ? stl.error : ""}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="password">confirm Password</label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Enter your password"
            value={values.password_confirmation}
            onChange={handleChange}
            className={errors.password_confirmation ? stl.error : ""}
          />
          {errors.password_confirmation && (
            <p>{errors.password_confirmation}</p>
          )}
        </div>
        <Button className={stl.submit} loading={loading} type="submit">
          Signup
        </Button>
        <p className={stl.user}>
          have an account <Link to="/user/login">Login</Link>
        </p>
      </form>
    </Layout>
  );
};

export default Signup;

// add creadit card form
