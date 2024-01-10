import stl from "./OrangeTitle.module.css";

const OrangeTitle = ({ text, className }) => {
  return (
    <h2 className={`${stl.OrangeTitle} ${className ? className : ""}`}>
      {text}
    </h2>
  );
};

export default OrangeTitle;
