import { useEffect, useRef, useState } from "react"

export default function UseRef(){
    let [name,setName]=useState("");
    let renderCount=useRef(0)
    let inputRef=useRef()

    useEffect(()=>{
    renderCount.current+=1
    })
    
    let focus = () =>{
        inputRef.current.focus();
        inputRef.current.value="Some value"
    }

    return(
        <>
        <input ref={inputRef} type="text" value={name} onChange={(e)=>{
  setName(e.target.value)
    }} />
        <p>My NAme is {name}</p>
        <p>I render {renderCount.current} time</p>
        <button onClick={focus} >Focus</button>
        </>
    )
}