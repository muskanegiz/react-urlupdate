import React, { useEffect, useState } from "react";
const State = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    })
    return (
        <>
            <div className="font-bold text-xl text-center">
                <h1 className="mb-5"> Count </h1>
                <button onClick={() => { setCount(count + 1) }}> + </button>
                <h1> {count}</h1>
                <button onClick={() => { setCount(count - 1) }}> - </button>
            </div>
        </>
    )
}
export default State;