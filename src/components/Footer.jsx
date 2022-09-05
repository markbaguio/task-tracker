function Footer({ color, text, alignment, onFooterClick }) {
  return (
    <div
      style={{ textAlign: alignment, color: color, cursor: "pointer" }}
      onClick={onFooterClick}
    >
      {text}
    </div>
  );
}

Footer.defaultProps = {
  alignment: "center",
};

export default Footer;
