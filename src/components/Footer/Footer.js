import "./Footer.scss";

function Footer({ isHidden }) {
  return (
    <div className={"Footer " + isHidden}>
      <ul>
        <li>Privacy Policy</li> |<li>2023 DoubleYou</li>
      </ul>
    </div>
  );
}
export default Footer;
