import './Steps.css'
import arrow from "../../assets/arrow3.png";
function Steps() {
  return (
    <div>
      <div className="how-it-works">
        <h2>How We Work</h2>
        <div className="steps">
          <div className="step">
            <div className="icon_background">
              <h2 className="num">1</h2>
            </div>
            <img src={arrow} alt="" />
            <h3>Planning and Analysis</h3>
            <p>
              We collect detailed requirement, resources and develop a detailed
              project plan
            </p>
          </div>
          <div className="step">
            <div className="icon_background">
              <h2 className="num">2</h2>
            </div>
            <img src={arrow} alt="" />
            <h3>Design and Development</h3>
            <p>
              We create architecture & design, build prototype to visualize then
              write actual code following design specification
            </p>
          </div>
          <div className="step">
            <div className="icon_background">
              <h2 className="num">3</h2>
            </div>
            <h3>Testing and Deployment</h3>
            <p>
              We conduct various test phases, then deploy software to production
              environment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Steps;
