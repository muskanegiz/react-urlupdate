// import React ,{useContext} from "react";
// import { AppContext, AppProvide } from "./usecontext/useContext";
// const D = ()=>{
//   console.log(AppProvide);
//   console.log(AppContext);
//   const user = useContext(AppProvide);
//     const State = useContext(AppProvide)
//     console.log(State.name);
//     console.log(user);
//     return(
//         <>
//             <h1> my name is </h1>
//         </>
//     )
// }
// export default D;


import React, { useContext } from "react";
import NoteContext from "./usecontext/NoteContext";
const Child = () => {
  console.log(NoteContext);
  const user = useContext(NoteContext);
  console.log(user);
  return (
    <>
      <div >
       
          <h1> my name is {user.name} and age is {user.age}</h1>
    
      </div>
    </>
  )



};

export default Child;

