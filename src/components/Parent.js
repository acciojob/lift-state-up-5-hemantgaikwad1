import React from "react";
import Child from "./Child"
import { useState } from "react";
export default function Parent(){
    let [isLoggedIn,setIsLoggedIn]=useState(false);
    function solve(){
        setIsLoggedIn(true);
      
        
    }
      console.log(isLoggedIn);
return (
    <div>
        <Child solve={solve}/>
    </div>
)
}