import React, { useReducer } from "react";
import reducer from "./reducer";
const initialvalue = 0;
const Reducer = () => {
    const [count, dispatch] = useReducer(reducer, initialvalue);
    return (
        <>
            <div className="font-bold text-xl text-center">
                <h1 className="mb-5"> Count </h1>
                <button onClick={() => dispatch({ type: "INC" })}> + </button>
                <h1>{count}</h1>
                <button onClick={() => dispatch({ type: "DEC" })}> - </button>
            </div>
        </>
    )
}
export default Reducer;