import { useState } from "react";
import "./Navbar.css";
import { TiTime } from "react-icons/ti";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active", window.scrollY > 100);
  });

  const [mobile, setMobile] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <h2>TABLOOR</h2>
        </div>
        <div
          className={mobile ? "link" : "navlinks"}
          onClick={() => setMobile(false)}
        >
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="#services">
              <li>Services</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="btn">
          <button>Contact Us</button>
        </div>
        <div className="toggle" onClick={() => setMobile(!mobile)}>
          {mobile ? <TiTime className="close" /> : <BiMenu className="open" />}
        </div>
      </div>
    </>
  );
};
export default Navbar;
