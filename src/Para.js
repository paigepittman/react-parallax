/**
 * -------------------------------------------------------
 * React Scroll Parallax
 * -------------------------------------------------------
 *
 * Experimenting with some scroll based parallax effects
 * using React. See react-scroll-parallax:
 * https://github.com/jscottsmith/react-scroll-parallax
 *
 */

 import React from 'react';
 import {Parallax, ParallaxProvider} from 'react-scroll-parallax';
 import {TweenLite, Power2} from 'gsap';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const run = () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    const scrollAnimation = { scrollTop: 0 };
    const scrollTop = document.body.clientHeight / 2 - window.innerHeight / 2;

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
run();


class Letter extends React.Component {
    render() {
console.log(document.getElementById('cloud-1'))
        const { letter } = this.props;
        console.log(letter)
        const offset = getRandomInt(60, 200);
        const isSlower = getRandomInt(0, 1) ? true : false;
        return (
            <div className="letter" style={{
                width: letter.bounds[0] / 10 + 'rem',
                height: letter.bounds[1] / 10 + 'rem',
            }}>
                {letter.forms.map((X, i) =>
                    <Parallax
                        className="form"
                        key={i}
                        offsetYMin={-offset * (i + 1) + 'px'}
                        offsetYMax={offset * (i + 1) + 'px'}
                        slowerScrollRate={isSlower}
                    >
                        {X}
                    </Parallax>
                )}
            </div>
        );
    }
}

export default Letter;
