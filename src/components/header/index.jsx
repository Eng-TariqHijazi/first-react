import "./style.css";
const Header = ({active}) => {
  return (
    <div className="header">
      <div className="container">
        <div className="content">

        <div className="logo">
          <a href="#">LOGO</a>
        </div>
        <ul>
          {console.log(window)}
          <li className={active == "home"? "active":""}>Home</li>
          <li className={active == "about"? "active":""}>About</li>
          <li>Contact</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
