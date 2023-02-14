// import React from "react";
// import D from "./D";
// const B = ()=>{
//     return(
//         <>
//             <D/>
//         </>
//     )
// }
// export default B;


import React from "react";
import Child from "./Child";
import NoteStatus from "./usecontext/NoteStatus";
const Parent = () => {
  return (
    <>
    <NoteStatus>
      <div>
        <h2 className="font-bold text-xl flex justify-center items-center mb-7">Parent Component</h2>
        <div className="font-bold text-xl flex justify-center items-center">
            <Child />
        </div>
      </div>
      </NoteStatus>
    </>
     
 
  );
};

export default Parent;