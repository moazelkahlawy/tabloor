import "./Services.css";
import { services } from "../../data";

function Services() {
  return (
    <div>
      <div className="services" id="services">
        <h2 className="service_header">Our Services</h2>
        <p className="text">
          Our team of expert is dedicated to turning your vision into realty
          with innovative and reliable technology.
        </p>
        <div className="service_container">
          {services.map(({ icon, head, desc, action, link }, key) => {
            return (
              <div className="service_list" key={key}>
                <div className="service_icon">
                  <h2 className="icon">{icon}</h2>
                </div>

                <h2>{head}</h2>
                <p>{desc}</p>
                <div className="action">
                  <p>{action}</p>
                  <h2>{link}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Services;
