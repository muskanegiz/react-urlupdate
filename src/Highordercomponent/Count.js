import React, { Component } from "react";
import UpdateComponent from "./withCounter";
    class Counter extends Component{
       
        render(){
            const {count,increment}= this.props;
            return(
                <>
                    <h1> {count}</h1>
                    <button onClick={increment} > Click {count} time</button>
                </>
            )

        }
    }
    export default UpdateComponent(Counter);
