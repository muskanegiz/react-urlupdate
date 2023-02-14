import React from "react";
const List = ()=>{
    const num = [2,3,4,5,6];
   console.log(num);
    const number = num.map((numbers) =>
        <li>{numbers*2}</li>
    )
    
   return(
    <>
       {number}
    </>
   )
}
export default List