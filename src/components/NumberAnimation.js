import React, { useEffect, useState } from "react";
import { TweenLite } from "gsap";

const NumberAnimation = ({ from, to, duration }) => {
    
    const [number, setNumber] = useState(from); // Animation starts from this number

    useEffect(() => {
        const myObject = { // Dummy object to use the gsap tween
            totalValue: from
        };
        const tween =TweenLite.to(myObject, duration, {
            totalValue: to, // Finishing number
            roundProps: "totalValue", // Rounds the value to nearest integer. Ex. -> 2 in stead of 2.0000001
            onUpdate: () => { // 	A function to call every time the animation updates (on each "tick" that moves its playhead).
                setNumber(myObject.totalValue); // Every time we animate our object, we will update the state
            }
        });
        tween.play();
        return function cleanup() { // When component unmounts we stop the animation(stop trying to update the state)
            tween.kill();
        }
    }, [from, to, duration]);

    return (
        <>
            {number}
        </>
    );
};

export default NumberAnimation;