import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import AddProduct from "./pages/AddProduct.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login.jsx";
import College from "./pages/College.jsx";
import Colleges from "./pages/Colleges.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/register",
    element: <Signup />,
  },
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/product/add",
    element: <AddProduct />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/college/:id",
    element: <College />,
  },
  {
    path: "/colleges",
    element: <Colleges />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
