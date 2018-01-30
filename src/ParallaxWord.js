import React from 'react';
import Letter from './Para';

const P1 = {
    bounds: [300, 300],
    forms: [
      <svg viewBox="0 0 110 290" height="300" width="300">
  <text className="fill-5" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="0" y="200">P</text>

</svg>,
      <svg viewBox="0 0 110 290" height="300" width="300">
  <text className="fill-2" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="5" y="200">P</text>

</svg>,
<svg viewBox="0 0 110 290" height="300" width="300">
<text className="fill-6" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="10" y="200">P</text>

</svg>

    ],
};

const A2 = {
    bounds: [300, 300],
    forms: [
      <svg viewBox="0 0 110 290" height="300" width="300">
      <text className="fill-5" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="0" y="200">a</text>

    </svg>,
        <svg viewBox="0 0 110 290" height="300" width="300">
    <text className="fill-2" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="5" y="200">a</text>

  </svg>,
  <svg viewBox="0 0 110 290" height="300" width="300">
<text className="fill-6" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="10" y="200">a</text>

</svg>,

    ],
};

const R3 = {
    bounds: [100, 350],
    forms: [
      <svg viewBox="0 0 110 300" height="300" width="300">
  <text className="fill-5" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="0" y="200">i</text>

</svg>,

        <svg viewBox="0 0 110 300" height="300" width="300">
    <text className="fill-2" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="0" y="200">i</text>

  </svg>,
  <svg viewBox="0 0 110 300" height="300" width="300">
<text className="fill-6" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="0" y="200">i</text>

</svg>

    ]
};

const A4 = {
    bounds: [250, 300],
    forms: [

        <svg viewBox="0 0 110 290" height="300" width="300">
    <text className="fill-5" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="0" y="200">g</text>

  </svg>,
  <svg viewBox="0 0 110 290" height="300" width="300">
<text className="fill-2" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="5" y="200">g</text>

</svg>,
<svg viewBox="0 0 110 290" height="300" width="300">
<text className="fill-6" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="10" y="200">g</text>

</svg>,
    ]
};

const L5 = {
    bounds: [250, 300],
    forms: [
        <svg viewBox="0 0 110 281" height="300" width="300">
    <text className="fill-5" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="0" y="200">e</text>

  </svg>,
  <svg viewBox="0 0 110 281" height="300" width="300">
<text className="fill-2" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="5" y="200">e</text>

</svg>,
<svg viewBox="0 0 110 281" height="300" width="300">
<text className="fill-6" style={{fontSize: "250px", fontFamily:'Fredoka One'}} x="10" y="200">e</text>

</svg>
    ],
};



const word = [P1, A2, R3, A4, L5];

const ParallaxWord = () => (
    <div className="word">
        {word.map((X, i) =>
            <Letter key={i} letter={X} />
        )}
    </div>
);

export default ParallaxWord;
