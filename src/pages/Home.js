import React from 'react'
import {Box, Grid , Container} from "@mui/material";
import Menu from "../components/Menu"
import Catagories from '../components/Catagories';
import About from '../components/About';

export default function Home() {
  return (
    <div className='Home'>
<Menu/>
<Catagories/>

<About/>

    </div>
  )
}
