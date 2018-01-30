import React, { Component } from 'react';
import Para from './Para';
import Scroll from './Scroll';
import Gradients from './Gradients';
import ParallaxWord from './ParallaxWord';
import Github from './Github';
import Fullscreen from './Fullscreen';
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';
import {TweenLite, Power2} from 'gsap';

const Title = () => (
  <div className="title">
    web developer
  </div>
)

const App = () => (
    <ParallaxProvider>
        <main>
            <Scroll />
            <Gradients />
            <ParallaxWord />
            <Title />      
            <Github />
            {/* <Fullscreen /> */}
        </main>
    </ParallaxProvider>
);


export default App;
