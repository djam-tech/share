import React, {useContext,useRef, useEffect, useState} from 'react'
import {MyContext} from '../App'

export default function Comp3(props) {
    const {nbre, editNbre} = props
    const {hello, setHello}=useContext(MyContext)
    const [val, setVal] = useState('')
    const input = useRef()
    const prevVal = useRef('')
    // useEffect(()=> console.log(h3.current),[])
    useEffect(()=>{prevVal.current=val} ,[val])
  return (
    <div>
        <h3 
        onClick={()=>input.current.focus()}
        >Comp3 <span>{hello}</span></h3>
        <input ref={input} type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        <p>Prev val: <span>{prevVal.current}</span> </p>


        <button onClick={()=>setHello(hello+'1')}>inc</button>
        

    </div>
  )
}
