import { React } from "react";

function RandomNum(props){
   
    let num = Math.floor(Math.random() * 10) + 1;

    return <div>
        <h3>Random number is {num} and is
        {num % 2 === 0 && ` EVEN`}
        {num % 2 !== 0 && ` ODD`}
        </h3>
    </div>

}

export default RandomNum;


//     This pattern is the same as saying false AND... it stops at false.
//   - `{someBoolean && <h1>Is True</div>}`

