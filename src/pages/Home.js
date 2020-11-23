//-----React Import-----//
import React, { useEffect, useRef } from 'react';
import '../styles/Home.scss';
//-----GSAP Import-----//
import { TweenMax } from 'gsap';

function Home() {
    useEffect(() => {
        console.log('Halló Home');
        console.log(textRef);
        TweenMax.staggerFromTo(
            textRef.current,
            1, // Duration
            // From
            {
                x: '700'
            },
            // To
            {
                opacity: 1,
                x: '0',

            },
            0.2 // Stagger time
        );
    }, []);

    let textRef = useRef([]);

    return (
        <>
            <div className="Background">
                <div className="Overlay">
                    <div className="Mask"></div>
                    <div className="Home">
                        <section className="Home-Section">
                            <h1 className="Home-Section-Title" ref={el => { textRef.current[0] = el }}>Halló Heimur!</h1>
                            <p className="Home-Section-Text" ref={el => { textRef.current[1] = el }}>
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
