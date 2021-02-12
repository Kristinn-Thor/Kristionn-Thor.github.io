import React, { useEffect, useState } from "react";
import { TweenLite } from "gsap";

const NumberAnimation = ({ logoSource, logoText, textColor, circleColor, from, to, duration }) => {

  const [deg, setDeg] = useState(from); // Animation starts from this number

  useEffect(() => {
    const myObject = { // Dummy object to use the gsap tween
      totalValue: from
    };
    const tween1 = TweenLite.to(myObject, duration, {
      totalValue: to, // Finishing number
      onUpdate: () => { // 	A function to call every time the animation updates (on each "tick" that moves its playhead).
        setDeg(myObject.totalValue); // Every time we animate our object, we will update the state
      }
    });
    tween1.play();

    return function cleanup() { // When component unmounts we stop the animation(stop trying to update the state)
      tween1.kill();
    }
  }, [from, to, duration]);

  const circleStyle = {
    position: 'relative',
    height: '150',
    width: '150',
    border: '2px solid white'
  };

  return (
    <>
      <svg viewBox='-30 0 160 130' style={circleStyle}>
        <circle cx='50' cy='50' r='57' stroke={circleColor} strokeWidth='10' strokeDasharray={`${deg} 360`} fill='none' />
        <image x='5' y='5' width='90' height='90' href={`${logoSource}`} />
        <text fill={textColor} fontWeight='bold' fontSize='30' x='10' y='140' >{logoText}</text>
      </svg>
    </>
  );
};

export default NumberAnimation;