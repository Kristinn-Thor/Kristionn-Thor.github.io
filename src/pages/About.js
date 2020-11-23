import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import '../styles/About.scss';

function About() {
    useEffect(() => {
        TweenMax.fromTo(maskRef, {x:'700', y:'-700'}, {x:'0', y:'0', duration: 1});
    },[]);

    let maskRef = useRef(null);

    return (
        <>
            <div className="Background">
                <div className="Overlay">
                <div className="Mask" ref={el =>{maskRef=el}}></div>
                <div className="About">
                    <h2>Um mig</h2>
                    <p>Lorem ipsum Quisque sollicitudin et leo vel placerat. Vivamus sed maximus nisi. Duis vestibulum neque et iaculis vehicula. Etiam nunc tortor, bibendum ac rutrum quis, consectetur a risus. Cras mattis tincidunt orci. Fusce consequat a mi at pellentesque. Vivamus commodo magna magna, sit amet rhoncus erat aliquet vitae. Ut viverra aliquam leo. Vestibulum viverra, ante eget cursus rhoncus, nisl quam mollis sem, eu rhoncus tellus nibh id dolor. Vivamus porta leo vitae ipsum sagittis iaculis. In vitae eros nec metus aliquam gravida non ornare purus. Donec porttitor risus vel ex fermentum elementum.  </p>
                </div>
                </div>
            </div>
        </>
    );
}

export default About;