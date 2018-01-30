import React from 'react';
import {Carousel, Card, CardTitle} from 'react-materialize';


let projects = [{title: "#Mash", role: "Front End Developer", code: "https://github.com/elthsu/hashmash", img: "./hash-1.png"}, {title: "Porsche Specials", role: "Sole Developer", code: "https://github.com/paigepittman/porsche-react", url: "site: https://porsche-specials-tracker.herokuapp.com/", img: "./porsche-1.jpg"}, {title: "Capitol Hill", role: "Front End Developer", url: "site: https://capitol-hill.herokuapp.com", code: "https://github.com/Capitol-Hill/Capitol-Hill", img: "./capitol-1.jpg"}, {title: "GroopUp", role: "Front End Developer", code: "https://github.com/GroopUp/GroopUp", url: "site: http://groopup.herokuapp.com/", img: "./groop-1.jpg"}];

const Github = () => (
  <div className="projects-div container">
    <div className="row">
    {/* <Carousel options={{ fullWidth: false }} style={{height: "400px"}}> */}
          {projects.map(function(project, i) {
            return (



              <div className="col l4 m4 s12">
                <div className="project-box">
              <Card header={<CardTitle reveal image={project.img} waves='light'/>}
              		title={project.title}
              		reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              		<p><a href="#">This is a link</a></p>
              </Card>
            </div>
            </div>

              // <div className="project-box">
              //
              //     <div><h1 className="project-title">{project.title}</h1>
              //   <p className="project-blurb">{project.blurb}</p>
              //   <p className="project-role">role: {project.role}</p>
              //   <p className="project-code">code: {project.code}</p>
              //   <p className="project-url">{project.url}</p></div>
              //   <div>
              //   <img src={project.img} className="project-image"/>
              // </div>
              //
              // </div>
            )
          })
        }
        {/* </Carousel> */}
        </div>
  </div>
);
export default Github;
