import "./Projects.css";
import { projects } from "../../data";
function Projects() {
  return (
    <div>
      <div className="projects" id="projects">
        <div className="header">
          <div className="info">
            <h3>Hero are some of our latest projects</h3>
          </div>
          <button>Get In Touch</button>
        </div>
        <div className="projects-items">
          {projects.map(({ image, title, text }, key) => {
            return (
              <div className="item" key={key}>
                <img src={image} alt="" />
                <div className="info">
                  <h4>{title}</h4>
                  <p>{text}</p>
                  <a href="#">View Project</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Projects;
