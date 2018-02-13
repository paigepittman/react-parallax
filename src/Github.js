import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import {TweenLite, Power2} from 'gsap';
import {Carousel, Card, CardTitle} from 'react-materialize';


const renderDetails = (id) => {
    return (
      <div>
    <p>
      {projects[id].blurb}
    </p>
    <p>
      role: {projects[id].role}
    </p>
    <p>
      <a href={projects[id].code}> view code </a>
    </p>
    <p>
       <a href={projects[id].url}> view site </a>
    </p>
  </div>
    )
}


const scroller = () => {

    const scrollAnimation = { scrollTop: window.pageYOffset };
    const scrollTop = document.getElementById("github-btn").offsetTop;

    const tween = TweenLite.to(scrollAnimation, 3, {
        scrollTop: scrollTop,
        ease: Power2.easeInOut,
        onUpdate: () => {
            window.scrollTo(0, scrollAnimation.scrollTop);
        }
    });

    window.addEventListener('mousewheel', function mouseHandler() {
        tween.kill();
        window.removeEventListener('mousewheel', mouseHandler, false);
    }, false);



}

let projects = [{title: "#Mash", role: "Front End Developer", code: "https://github.com/elthsu/hashmash", img: "./mash.gif", blurb: "Streamlined project management based on your GitHub repos built with React and Socket.io for realtime updates"}, {title: "Porsche Specials", role: "Sole Developer", code: "https://github.com/paigepittman/porsche-react", url: "site: https://porsche-specials-tracker.herokuapp.com/", img: "./porsche.gif", blurb: "Porsche Specials Tracker is a React application created for a district manager at Porsche to easily track and follow up with the promotions each of his dealerships."}, {title: "Capitol Hill", role: "Front End Developer", url: "site: https://capitol-hill.herokuapp.com", code: "https://github.com/Capitol-Hill/Capitol-Hill", img: "./capitol-hill.gif", blurb: "Capitol Hill is an application designed to easily connect people with their Senators and Congressional representatives and keep them up to date with their representative’s legislative actions."}, {title: "GroopUp", role: "Front End Developer", code: "https://github.com/GroopUp/GroopUp", url: "site: http://groopup.herokuapp.com/", img: "./groop-up.gif", blurb: "A more social GroupOn and a more personalized Eventbrite."}];


const Github = () => (
  <div className="projects-div container">
    <div className="row">

              <div className="col l4 m4 s12">
                <div className="project-box">
              <Card header={<CardTitle reveal image={projects[0].img} waves='light'/>}
              		title={projects[0].title}
              		reveal={renderDetails(0)}>
              </Card>
            </div>
            </div>

            <div className="col l4 m4 s12">
              <div className="project-box">
            <Card header={<CardTitle reveal image={projects[1].img} waves='light'/>}
                title={projects[1].title}
                reveal={renderDetails(1)}>
            </Card>
          </div>
          </div>

        </div>
        <div className="row">
          <div className="col l4 m4 s12">
            <div className="project-box">
          <Card header={<CardTitle reveal image={projects[2].img} waves='light'/>}
              title={projects[2].title}
              reveal={renderDetails(2)}>
          </Card>
        </div>
        </div>
        <div className="col l4 m4 s12">
          <div className="project-box">
        <Card header={<CardTitle reveal image={projects[3].img} waves='light'/>}
            title={projects[3].title}
            reveal={renderDetails(3)}>
        </Card>
      </div>
      </div>
        </div>

        <Parallax

        offsetYMax={5}
        offsetYMin={-5}
        slowerScrollRate="false" >
        <svg  className="arrow-3" viewBox="0 0 400 500" height="300" width="400" onClick={scroller}>
          <rect className="fill-3" width="40" height="80" stroke-width="3" stroke="none" />
          <polygon className="fill-6" points="-35,80 74,80 20,150" stroke-width="3" stroke="none" />
        </svg>
        </Parallax>
        </div>

);
export default Github;



{/* <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
