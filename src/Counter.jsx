import React, { useEffect, useState } from "react";

const Counter=()=>{
const [number,setNumber]=useState(0);
const [text,setText]=useState('hello');

//useEffect(callback,dependency array)
useEffect(()=>{
    console.log('call from global console')
    setText(Math.random())
},[])
    return(
    <div>
        <div>{number}</div> 
        NEW APP
        {text}
        <button onClick={()=>setText(Math.random())}>update text</button>
        <button onClick={()=>setNumber(Math.random())}>Update Number</button>
    </div>
)
} 
export default Counter;