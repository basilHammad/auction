import stl from "./Button.module.css";

const Button = ({ onClick, children, className, loading, disabled, type }) => {
  return (
    <button
      className={`${stl.btn} ${className ? className : ""}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {loading ? <span className={stl.loader}></span> : children}
    </button>
  );
};

export default Button;
