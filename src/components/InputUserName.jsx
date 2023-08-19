import React ,{useEffect,useState,useRef} from 'react'
import {Button} from "@mui/material"
import Typography from '@mui/material/Typography';
export default function InputUserName() {

const data = useRef();
const submit =(event)=>{
    console.log(data.current.value);
    localStorage.setItem("username",data.current.value );
    event.preventDefault();
}

  return (
    <div>
        <input ref={data} 
        
        type="text" placeholder='Enter your name ....... ' style={{width:"300px",backgroundColor:"transparent",outline:"none",border:"none",color:"#2FC7B5",borderBottom:"2px solid #2FC7B5",fontSize:"1.2rem"}} />
        <Button href="/Home" onClick={submit}> Submit</Button>
       

    </div>
  )
}
