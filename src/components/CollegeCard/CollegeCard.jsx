import { Link } from "react-router-dom";
import stl from "./CollegeCard.module.css";

const CollegeCard = ({ college }) => {
  return (
    <Link className={stl.wrapper} to={`/college/${college.id}`}>
      <img src={college.img} alt="" />
      <div>
        <strong>{college.name}</strong>
      </div>
    </Link>
  );
};

export default CollegeCard;
