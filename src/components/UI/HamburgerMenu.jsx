export default function HamburgerMenu(props) {
  return (
    <button className="ham-menu" onClick={props.handleShow}>
      <span className="ham-top"></span>
      <span className="ham-middle"></span>
      <span className="ham-bottom"></span>
    </button>
  );
}
