import React, { Component } from "react";
import UpdateComponent from "./withCounter";
    class Counter extends Component{
       
        render(){
            const {count,increment}= this.props;
            return(
                <>
                <div class="font-bold text-center text-xl">
                    <h1> {count}</h1>
                    <button type="button" className="inline-block px-6 py-2.5 mt-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={increment}>Click {count} time</button>
                </div>
                </>
            )

        }
    }
    export default UpdateComponent(Counter);
