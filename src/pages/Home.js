//-----React Import-----//
import React, { useEffect, useRef } from 'react';
import '../styles/Home.scss';
//-----GSAP Import-----//
import { TweenMax } from 'gsap';

function Home() {
    useEffect(() => {
        TweenMax.staggerTo(textRef.current, 2, {opacity: 1}, 0.3);
        TweenMax.fromTo(maskRef, {x:'700', y:'-700'}, {x:'0', y:'0', duration: 1});
    },[]);

    let textRef = useRef([]);
    let maskRef = useRef(null);
    const textStyle = { opacity: 0};

    return (
        <>
            <div className="Background">
                <div className="Overlay">
                    <div 
                    className="Mask" 
                    ref={el => {maskRef = el}}></div>
                    <div className="Home">
                        <section className="Home-Section">
                            <h1 
                            className="Home-Section-Title" 
                            ref={el => { textRef.current[0] = el }}
                            style={textStyle}
                            >Velkominn</h1>
                            <p 
                            className="Home-Section-Text" 
                            ref={el => { textRef.current[1] = el }}
                            style={textStyle}
                            >
                                Velkominn á heimasíðuna mína. Hér má finna upplýsingar um mig, það sem ég kann og nokkur verkefni tengd vefforritunun sem ég hef lokið.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
