import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
function Contact() {
  return (
    <div>
      <div className="contact" id="contact">
        <div className="contact_header">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact_info">
          <div className="contact_left">
            <h2>Lets takk Business</h2>
            <p>
              Type something very very catchy that will make your potential
              clients send a message and make further enquiry about your
              business
            </p>
            <div className="contact_details">
              <div className="detail">
                <FaEnvelope />
                <p>tablor@gmail.com</p>
              </div>
              <div className="detail">
                <FaPhone />
                <p>+123 456 789</p>
              </div>
              <div className="detail">
                <FaLocationDot />
                <p>EG, Country</p>
              </div>
            </div>
          </div>
          <div className="contact_right">
            <div className="contact_input">
              <div className="text">
                <input type="text" placeholder="Email" />
              </div>
              <div className="text">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="message">
                <textarea name="Message" cols={30} rows={10}>
                  Message
                </textarea>
              </div>
              <div className="btn">
                <button>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
