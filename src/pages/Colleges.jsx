import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import { useEffect } from "react";
import { getAllColleges } from "../store/actions/CollegesActions";
import CollegeCard from "../components/CollegeCard/CollegeCard";

const Colleges = () => {
  const dispatch = useDispatch();
  const { colleges } = useSelector((state) => state.college);

  useEffect(() => {
    dispatch(getAllColleges());
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
        }}
      >
        {colleges.map((college) => (
          <CollegeCard college={college} key={college.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Colleges;
