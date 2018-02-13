import React from 'react';
import {TweenLite, Power2} from 'gsap';
import Letter from './Para';

const P1 = {
    bounds: [300, 300],
    forms: [
      <svg viewBox="0 0 110 290" height="300" width="300">
  <text className="fill-5" x="0" y="200">P</text>

</svg>,
      <svg viewBox="0 0 110 290" height="300" width="300">
  <text className="fill-2" x="5" y="200">P</text>

</svg>,
<svg viewBox="0 0 110 290" height="300" width="300">
<text className="fill-6" x="10" y="200">P</text>

</svg>

    ],
};

const A2 = {
    bounds: [300, 300],
    forms: [
      <svg viewBox="0 0 110 290" height="300" width="300">
      <text className="fill-5" x="0" y="200">a</text>

    </svg>,
        <svg viewBox="0 0 110 290" height="300" width="300">
    <text className="fill-2" x="5" y="200">a</text>

  </svg>,
  <svg viewBox="0 0 110 290" height="300" width="300">
<text className="fill-6" x="10" y="200">a</text>

</svg>,

    ],
};

const R3 = {
    bounds: [100, 350],
    forms: [
      <svg viewBox="0 0 110 300" height="300" width="300">
  <text className="fill-5" x="0" y="200">i</text>

</svg>,

        <svg viewBox="0 0 110 300" height="300" width="300">
    <text className="fill-2" x="0" y="200">i</text>

  </svg>,
  <svg viewBox="0 0 110 300" height="300" width="300">
<text className="fill-6" x="0" y="200">i</text>

</svg>

    ]
};

const A4 = {
    bounds: [250, 300],
    forms: [

        <svg viewBox="0 0 110 290" height="300" width="300">
    <text className="fill-5" x="0" y="200">g</text>

  </svg>,
  <svg viewBox="0 0 110 290" height="300" width="300">
<text className="fill-2" x="5" y="200">g</text>

</svg>,
<svg viewBox="0 0 110 290" height="300" width="300">
<text className="fill-6" x="10" y="200">g</text>

</svg>,
    ]
};

const L5 = {
    bounds: [250, 300],
    forms: [
        <svg viewBox="0 0 110 281" height="300" width="300">
    <text className="fill-5" x="0" y="200">e</text>

  </svg>,
  <svg viewBox="0 0 110 281" height="300" width="300">
<text className="fill-2" x="5" y="200">e</text>

</svg>,
<svg viewBox="0 0 110 281" height="300" width="300">
<text className="fill-6" x="10" y="200">e</text>

</svg>
    ],
};

const scroller = () => {

    const scrollAnimation = { scrollTop: window.pageYOffset };
    const scrollTop = document.getElementById("projects-scroll").offsetTop;

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


const word = [P1, A2, R3, A4, L5];

const ParallaxWord = () => (
    <div className="word">
        {word.map((X, i) =>
            <Letter key={i} letter={X} />
        )}

          <svg className="arrow-2" viewBox="0 0 400 500" height="300" width="400" onClick={scroller}>
            <rect className="fill-3" width="40" height="80" stroke-width="3" stroke="none" />
            <polygon className="fill-6" points="-35,80 74,80 20,150" stroke-width="3" stroke="none" />
          </svg>
  </div>
);

export default ParallaxWord;
