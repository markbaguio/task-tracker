import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "../App";

const About = () => {
  return (
    <div>
      <h5>Version 1.0</h5>
      {/* <a href="/">Back</a> */}
      <Link to="/">Go Back</Link>{" "}
      {/**this is like an a tag. this is how to render the previous jsx file */}
    </div>
  );
};

export default About;
