import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";

function Footer({ color, alignment }) {
  return (
    <footer style={{ textAlign: alignment, color: color, cursor: "pointer" }}>
      <p>Copyright &copy; 2022</p>
      <Link to="/about" style={{ textDecoration: "none", color: "gray" }}>
        About
      </Link>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </footer>
  );
}

Footer.defaultProps = {
  alignment: "center",
};

export default Footer;
