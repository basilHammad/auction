import React, { useEffect, useState } from "react";
import { login } from "../store/actions/userACtions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import stl from "./Signup/Signup.module.css";
import Button from "../components/UI/Button/Button";
import Layout from "../components/Layout/Layout";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.common);

  const { user } = useSelector((state) => state.user);

  const validateForm = () => {
    const { email, password } = values;

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

    return email.trim() && email.includes("@") && password.trim();
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

    if (!isValid) return console.log("not valid");

    dispatch(
      login(
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
        <h1>Loge in</h1>

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

        <Button className={stl.submit} loading={loading} type="submit">
          Login
        </Button>
        <p className={stl.user}>
          do not have an account? <Link to="/user/register">Sign Up </Link>{" "}
        </p>
      </form>
    </Layout>
  );
};

export default Login;
