import React from "react";
const Child= (props)=>{
    console.log(props);
    return(
        <>
            <div class="text-center mt-10 text-xl">
                <h1 class="font-bold">{props.name}</h1>
                <p font="font-semibold">{props.value}</p>
            </div>
           
        </>
    )
}
export default Child;