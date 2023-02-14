// import React, { useRef } from "react";
// const Ref = ()=>{
//     const inputRef= useRef();
//     const ChangeBoader = ()=>{
//         inputRef.
//         inputRef.current.style.background="red";
//     }
//     return(
//         <>
//             <input type="text" ref={inputRef} className="w-15 h-10"></input>
// <button type="button" className="inline-block px-6 py-2.5 mt-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//     onClick={()=>{ChangeBoader}}>
//     Click Me
// </button>
//         </>
//     )
// }
// export default Ref;
import React, { useRef } from "react";
// import styled from "styled-components";

const RefHook = () => {
    const inputRef = useRef();

    const changeBorder = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "#82E0AA";
    };

    return (<>
        <div className="mt-10 ml-96">
            <input type="text" ref={inputRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-15 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </input>
            <button type="button" className="inline-block px-6 py-2.5 mt-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={changeBorder}>
                Click Me
            </button>
        </div>
    </>
    );
};



export default RefHook;