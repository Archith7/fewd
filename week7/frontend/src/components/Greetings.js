import React from "react";

function Greetings(props){
    return(
        <div>
            <h1>Welcome to react props</h1>
            <h1>{props.Name}</h1>
            <h1>{props.Org}</h1>
            <h1>{props.Dept}</h1>
        </div>
    )
}
export default Greetings