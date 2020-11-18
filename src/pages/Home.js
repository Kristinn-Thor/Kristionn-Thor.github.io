import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="Background">
                <div className="Overlay">
                    <section className="HomeSection">
                        <h1>Halló Heimur!</h1>
                            <p>
                                Velkominn á heimasíðuna mína. Hér má finna upplýsingar um mig, það sem ég kann og nokkur verkefni tengd vefforritunun sem ég hef lokið.
                            </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;
