import React from "react";

class Person extends React.Component{
    render(){
        return(
            <div>
            <h1>Welcome to react props</h1>
            <h1>{this.props.Name}</h1>
            <h1>{this.props.Address}</h1>
            {/* <h1>{this.props.Dept}</h1> */}
        </div>
        )
    }
}