function Footer({ color, alignment }) {
  return (
    <footer style={{ textAlign: alignment, color: color, cursor: "pointer" }}>
      <p>Copyright &copy; 2022</p>
      <a href="/about">About</a>
    </footer>
  );
}

Footer.defaultProps = {
  alignment: "center",
};

export default Footer;
