import React from "react";

const SecondTimer = (props) => {
  
    let countdown = 14;
    let interval = setInterval(() => {
        countdown--;
    }, 1000);
        console.log(countdown);
        //not sure why clearInterval isn't working
    clearInterval(interval);
  
    return <h1>Seconds remaining: {countdown}</h1>

};
export default SecondTimer;