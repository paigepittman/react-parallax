import React, { Component } from 'react';
import Para from './Para';
import Scroll from './Scroll';
import Gradients from './Gradients';
import ParallaxWord from './ParallaxWord';
import Github from './Github';
import Fullscreen from './Fullscreen';
import {Parallax, ParallaxProvider, TweenLite, Power2} from 'react-scroll-parallax';

const Title = () => (
  <div className="title">
    web developer
  </div>
)

const App = () => (
    <ParallaxProvider>
        <main>
            {/* <Scroll /> */}
            <Gradients />
            <ParallaxWord />
            <Title />
            {/* <Github /> */}
            {/* <Fullscreen /> */}
        </main>
    </ParallaxProvider>
);

export default App;
