import './Hero.css'
import glovo from "../../assets/glovo-logo.svg";
import payoneer from "../../assets/payoneer-logo.svg";
import paypal from "../../assets/paypal-logo.svg";
import stripe from "../../assets/stripe-logo.svg";
import hero_img from "../../assets/hero.jpg";
function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero_left">
          <h2 className="hero_header">Building Tomorrow's Solution Today</h2>
          <p className="hero_desc">
            Trnasfrom your ideas into powerful software solution. Stay ahead of
            the curve with out advanced software development services.
          </p>
          <div className="hero_logo">
            <img src={glovo} alt="hero_logo" className="hero_logo" />
            <img src={stripe} alt="hero_logo" className="hero_logo" />
            <img src={paypal} alt="hero_logo" className="hero_logo" />
            <img src={payoneer} alt="hero_logo" className="hero_logo" />
          </div>
        </div>
        <div className="hero_right">
          <img src={hero_img} alt="hero_img" className="hero_img" />
        </div>
      </div>
    </div>
  );
}
export default Hero;
