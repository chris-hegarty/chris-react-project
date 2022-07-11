import React from "react";

class Users extends React.Component {

  constructor(props) {
    super(props);
  }

// - This file will use this pattern of looping through arrays:
// - `{someArray.map((user) => <div key={user.id}>Hello</div>)}`

  render() {
    let people = [
    {
        first: "Chris",
        last:  "Hegarty",
        city:  "Omaha"
    },
    {
        first: "Tyler",
        last:  "Roberson",
        city:  "Tampa"

    },
    {
        first: "Michael",
        last:  "Getter",
        city:  "Corning"

    },
    {
        first: "Geo",
        last:  "Sweeney",
        city:  "St. Petersburg" 
    },
        {
        first: "Jeff",
        last:  "Sumner",
        city:  "Austin" 
    }
]
    return <div>
        {/* You map through the array. */}
        {/* It returns a new array  */}
         {/* is replaced by us doing something to the previous oneReturn new array . */}
         
        {people.map((val,idx) => 
            <div key={idx}>
                {val.first} {val.last} lives in {val.city}.
            </div>
        )}

    </div>;
  }
}

export default Users;

