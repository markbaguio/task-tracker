import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick, onMouseEnter }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {text}
    </button>
  );
};

/**
 * the onClick is a prop because buttons have different function.
 */

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func, //because onClick is a function.
};

export default Button;
