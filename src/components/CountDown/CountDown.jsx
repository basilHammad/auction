import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  return (
    <Countdown
      date={Date.now() + 1 * 1000}
      renderer={({ seconds }) => <strong>{seconds}</strong>}
      onComplete={() => {
        console.log("first");
      }}
    />
  );
};

export default CountDown;
