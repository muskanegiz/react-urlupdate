import {ADD_TO_CART} from '../Constant';
import {REMOVE_TO_CART} from '../Constant';

export const addToCart =(data)=>{
    console.log(data);
    // console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const removeToCart =()=>{
    // console.warn("action",data)
    return {
        type:REMOVE_TO_CART,
    }
}