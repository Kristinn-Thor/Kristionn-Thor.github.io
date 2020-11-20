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
    },[]);

    let textRef = useRef([]);

    return (
        <div className="Home">
            <div className="Background">
                <div className="Overlay">
                    <section className="HomeSection">
                        <h1 ref={el => { textRef.current[0] = el }}>Halló Heimur!</h1>
                        <p ref={el => { textRef.current[1] = el }}>
                            Velkominn á heimasíðuna mína. Hér má finna upplýsingar um mig, það sem ég kann og nokkur verkefni tengd vefforritunun sem ég hef lokið.
                            </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;
