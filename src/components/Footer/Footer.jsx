import "./Footer.css";
import facebook from "../../assets/facebook_icon.png";
import twitter from "../../assets/twitter_icon.png";
import linkedin from "../../assets/linkedin_icon.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="content_left">
            <h2>Tabloor</h2>
            <p>
              We specialize in creatting robust, scalable solutions that helps
              business thrive in a digital world
            </p>
            <div className="footer_social_icon">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          <div className="content_center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="content_right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>Phone: (123) 456-7890</li>
              <li>Email: support@crm-solutions.com</li>
              <li>Address: 123 Business St, Suite 100, City, State</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer_copyright">
          Copyright 2024 @Company. All right Reserved
        </p>
      </div>
    </div>
  );
}
export default Footer;
