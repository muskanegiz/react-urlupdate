import React from "react";
import { useParams , useLocation } from "react-router-dom";
import Child from "./Child";
const Main = ()=>{
    const {name} = useParams();
    const search = useLocation().search;
    const value= new URLSearchParams(search).get('value');
    console.log({value});
    return(
        <>
        <Child name={name} value={value}></Child> 
        </>
    )
}
export default Main;