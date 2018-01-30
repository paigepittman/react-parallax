import React from 'react';
import {Carousel} from 'react-materialize';


let projects = [{title: "#Mash", role: "Front End Developer", code: "https://github.com/elthsu/hashmash"}, {title: "Porsche Specials", role: "Sole Developer", code: "https://github.com/paigepittman/porsche-react", url: "site: https://porsche-specials-tracker.herokuapp.com/"}, {title: "Capitol Hill", role: "Front End Developer", url: "site: https://capitol-hill.herokuapp.com", code: "https://github.com/Capitol-Hill/Capitol-Hill"}, {title: "GroopUp", role: "Front End Developer", code: "https://github.com/GroopUp/GroopUp", url: "site: http://groopup.herokuapp.com/"}];

const Github = () => (
  <div className="projects-div">
    <Carousel options={{ fullWidth: true }}>
          {projects.map(function(project, i) {
            return (
              <div className="project-box">

                <h1 className="project-title">{project.title}</h1>
                <p className="project-blurb">{project.blurb}</p>
                <h1 className="project-role">role: {project.role}</h1>
                <h1 className="project-code">code: {project.code}</h1>
                <h1 className="project-url">{project.url}</h1>

              </div>
            )
          })
        }
        </Carousel>
  </div>
);
export default Github;
