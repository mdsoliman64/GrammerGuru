import React from 'react'
import {AppBar, Container} from '@mui/material';
import LogoImage from "../pages/image/webGrammer.png";
import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography';

export default function Menu() {
  return (
    <div className='Menu' style={{margin:0,padding:0}}>
 <AppBar position="static" sx={{backgroundColor:"#fff"}}>
 <Link to="/" style={{textAlign:"center"}}>
<img src={LogoImage} alt="logo" style={{width:"300px",textAlign:"center",margin:"auto"}}/><br/>

</Link>
 <Container maxWidth="xl">

 </Container>
 </AppBar>





    </div>
  )
}
