import team from "../../assets/team.jpg";
import { details } from "../../data";
import "./Details.css";

function Details() {
  return (
    <div className="details">
      <div className="left-details">
        <img src={team} alt="" />
      </div>
      <div className="right-details">
        <h2 className="right_header">Why Work With Us ?</h2>
        <div className="box_container">
          {details.map(({ head, icon, desc }, key) => {
            return (
              <div className="box" key={key}>
                <div className="detail_icon">
                  <h3 className="icon">{icon}</h3>
                </div>
                <h2 className="detail_head">{head}</h2>
                <p className="text">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Details;
