import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onToggleAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd === true ? "red" : "green"}
        text={showAdd === true ? "Hide" : "Show"}
        onClick={onToggleAdd}
      />
      {/**the attribute-looking code are props that can be
       * handled in the button component */}
    </header>
  );
};

//this is the default props.
Header.defaultProps = {
  title: "Task Tracker",
};

//prop types
//this is used to check if the data type of the props are correct,
//it makes your code more robust.
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in jsx
// const headerStyle = {
//   textAlign: "center",
//   color: "orange",
//   backgroundColor: "purple",
// };

export default Header;
