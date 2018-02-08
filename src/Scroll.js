import React from 'react';
import {Component} from 'react';
import {Parallax} from 'react-scroll-parallax';
import {TweenLite, Power2} from 'gsap';





class Scroll extends Component {

    constructor() {
      super();

    }


  render() {



    return (
        <div className="scroll">




          <svg  className="arrow" viewBox="0 0 400 500" height="300" width="400">
    <rect className="fill-3" width="40" height="80" stroke-width="3" stroke="none" />
    <polygon className="fill-6" points="-35,80 74,80 20,150" stroke-width="3" stroke="none" />


    </svg>


      <Parallax

      offsetXMax={5}
      offsetXMin={-5}
      slowerScrollRate="false" >
          <svg viewBox="100 100 400 500" height="100" width="200" className="cloud-6">
              <path d="M 10 300 q 50 -170 200 0" stroke="white" stroke-width="5" fill="white" />
            <path d="M 100 300 q 150 -325 290 0 " stroke="white" stroke-width="5" fill="white" />
            <path d="M 200 300 q 200 -150 255 0" stroke="white" stroke-width="5" fill="white" />
            <path d="M 7 300 l 450 0" stroke="white" stroke-width="5" fill="white" />

          </svg>
        </Parallax>
        <Parallax

        offsetYMin={-90}
        offsetYMax={90}

        slowerScrollRate="true" >

            <svg viewBox="0 0 400 500" height="400" width="500" className="cloud-1" id="cloud-1">
                <path d="M 10 300 q 50 -170 200 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 100 300 q 150 -325 290 0 " stroke="white" stroke-width="5" fill="white" />
              <path d="M 200 300 q 200 -150 255 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 7 300 l 450 0" stroke="white" stroke-width="5" fill="white" />

            </svg>
          </Parallax>


            <svg viewBox="100 100 400 500" height="100" width="200" className="cloud-7">
                <path d="M 10 300 q 50 -170 200 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 100 300 q 150 -325 290 0 " stroke="white" stroke-width="5" fill="white" />
              <path d="M 200 300 q 200 -150 255 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 7 300 l 450 0" stroke="white" stroke-width="5" fill="white" />

            </svg>


            <svg viewBox="100 100 400 500" height="300" width="400" className="cloud-2">
                <path d="M 10 300 q 10 -150 200 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 100 300 q 150 -325 290 0 " stroke="white" stroke-width="5" fill="white" />
              <path d="M 200 300 q 250 -230 255 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 7 300 l 450 0" stroke="white" stroke-width="5" fill="white" />

            </svg>



            <svg viewBox="0 0 400 500" height="400" width="500" className="cloud-3">
                <path d="M 10 300 q 50 -170 200 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 100 300 q 150 -325 290 0 " stroke="white" stroke-width="5" fill="white" />
              <path d="M 200 300 q 200 -150 255 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 7 300 l 450 0" stroke="white" stroke-width="5" fill="white" />

            </svg>


            <svg viewBox="100 100 400 500" height="200" width="300" className="cloud-4">
                <path d="M 10 300 q 50 -170 200 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 100 300 q 150 -325 290 0 " stroke="white" stroke-width="5" fill="white" />
              <path d="M 200 300 q 200 -150 255 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 7 300 l 450 0" stroke="white" stroke-width="5" fill="white" />

            </svg>

          <Parallax

          offsetXMin={0}
          offsetXMax={30}

          slowerScrollRate="true" >

            <svg viewBox="0 0 400 500" height="200" width="300" className="cloud-5">
                <path d="M 10 300 q 50 -170 200 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 100 300 q 150 -325 290 0 " stroke="white" stroke-width="5" fill="white" />
              <path d="M 200 300 q 200 -150 255 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 7 300 l 450 0" stroke="white" stroke-width="5" fill="white" />

            </svg>
          </Parallax>
          <Parallax


          offsetXMax={100}
          offsetXMin={-100}
          slowerScrollRate="false" >

            <svg viewBox="100 100 400 500" height="300" width="400" className="cloud-8">
                <path d="M 10 300 q 10 -150 200 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 100 300 q 150 -325 290 0 " stroke="white" stroke-width="5" fill="white" />
              <path d="M 200 300 q 250 -230 255 0" stroke="white" stroke-width="5" fill="white" />
              <path d="M 7 300 l 450 0" stroke="white" stroke-width="5" fill="white" />
            </svg>
            
          </Parallax>

        </div>


    );
  }
}












export default Scroll;
