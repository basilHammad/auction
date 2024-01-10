import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllColleges } from "../../store/actions/CollegesActions";
import CollegeCard from "../CollegeCard/CollegeCard";

import stl from "./Categories.module.css";
import OrangeTitle from "../OrangeTitle/OrangeTitle";

const Categories = () => {
  const dispatch = useDispatch();
  const { colleges } = useSelector((state) => state.college);

  useEffect(() => {
    dispatch(getAllColleges());
  }, []);

  return (
    <div className={`${stl.wrapper} container`}>
      <OrangeTitle text={"Categories"} />
      <div className={stl.CWrapper}>
        {colleges.map((college) => (
          <CollegeCard college={college} key={college.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
