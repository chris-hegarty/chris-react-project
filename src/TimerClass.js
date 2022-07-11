import React from "react";

//props is data passed in from a parent component.
class Timer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let countdown = 15;
    setInterval(() => {
        countdown--;
        console.log(countdown);
    }, 1000);
    return (
        <h1>Seconds remaining: {countdown} </h1>
    )
  }
}

//React does not pay attention to normal variables.

export default Timer;