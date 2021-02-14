import React, { useEffect, useState } from "react";
import { TweenLite } from "gsap";

const NumberAnimation = ({ className, logoSource, logoScale, logoX, logoY, logoText, textColor,textSize ,textX, textY, circleColor, from, to, duration }) => {

  const [deg, setDeg] = useState(from); // Animation starts from this number

  useEffect(() => {
    const myObject = { // Dummy object to use the gsap tween
      totalValue: from
    };
    const tween1 = TweenLite.to(myObject, duration, {
      totalValue: to, // Finishing number
      ease: 'power4.inOut',
      onUpdate: () => { // 	A function to call every time the animation updates (on each "tick" that moves its playhead).
        setDeg(myObject.totalValue); // Every time we animate our object, we will update the state
      }
    });
    tween1.play();
    return function cleanup() { // When component unmounts we stop the animation(stop trying to update the state)
      tween1.kill();
    }
  }, [from, to, duration]);

  return (
    <>
      <svg viewBox='-35 5 170 130' className={className}>
        <circle cx='50' cy='50' r='57' stroke={circleColor} strokeWidth='10' strokeDasharray={`${deg} 360`} strokeLinecap="round" fill='none' />
        <image id='logo' x={logoX} y={logoY} width={logoScale} height={logoScale} href={`${logoSource}`} />
        <text fill={textColor} fontWeight='bold' fontSize={textSize} x={textX} y={textY} >{logoText}</text>
        <animate>
          xlink:href='logo'

        </animate>
      </svg>
    </>
  );
};

export default NumberAnimation;