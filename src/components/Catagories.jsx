import React,{useEffect,useState} from 'react'
import {Grid,Typography,Box,Paper,Button} from "@mui/material";
import {Link} from "react-router-dom";
import Backgrounds from "../pages/image/bg.png"
import "../components/Catagories.css";
import ArticleImage from "../pages/image/1.png";
import VerbImage from "../pages/image/2.png";
import SynonymsImage from "../pages/image/3.png";
import AntonymsImage from "../pages/image/A.png"
import PrepositionImage from "../pages/image/4.png"
import PronounsImage from "../pages/image/5.png"
import TenseImage from "../pages/image/6.png"
import MiscImage from "../pages/image/7.png"
import InputUserName from "../components/InputUserName"
export default function Catagories() {

    const data = localStorage.getItem("username");



  return (
    <div className='Catagories'>
<Box className="cat-container" >


<Typography variant='h4' component="h2" sx={{textAlign:"center"}}> Welcome ! MR {data}</Typography>
<Typography variant='h6' component="h2" sx={{textAlign:"center"}}> Play Quizzes Like a Guru (Expert)..........</Typography>

    <Box sx={{textAlign:"center",marginTop:2}}>
    <InputUserName/>
    </Box>

{/* all catagories start from here */}
<Box className="all-cats" sx={{marginTop:10}}>
<Grid container spacing={2}>




{/* xxxxxxxxxx Article article article xxxxxxxxxxxxxxxx*/}
    <Grid item xs={12} sm={12} md={3} >
            <Paper elevation={2} sx={{ backgroundColor:"#8d6ed3",color:"#fff",padding:2,margin:"auto",textAlign:"center"}}>
                <img src={ArticleImage} alt="" style={{width:"100%"}}/>
                <Link to="/Article"><Button size="large" variant="contained" sx={{margin:"auto",textAlign:"center"}}> Play Quiz</Button></Link>
            </Paper>


    </Grid>
{/* xxxxxxxxxxxx Right form of verb xxxxxxxxxxxxxxxxxxxxxxxxxxx */}
   
<Grid item xs={12} sm={12} md={3} >
            <Paper elevation={2} sx={{ backgroundColor:"#33b2bc",color:"#fff",padding:2,margin:"auto",textAlign:"center"}}>
                <img src={VerbImage} alt="" style={{width:"100%"}}/>
                <Link to="/RightformVerb"><Button size="large" variant="contained" sx={{margin:"auto",textAlign:"center"}}> Play Quiz</Button></Link>
            </Paper>


    </Grid>
{/* xxxxxxxxxx Synonyms xxxxxxxxxxxxxxxxxxxx */}

<Grid item xs={12} sm={12} md={3} >
            <Paper elevation={2} sx={{ backgroundColor:"#6CBA3A",color:"#fff",padding:2,margin:"auto",textAlign:"center"}}>
                <img src={SynonymsImage} alt="" style={{width:"100%"}}/>
                <Link to="/Synonyms"><Button size="large" variant="contained" sx={{margin:"auto",textAlign:"center"}}> Play Quiz</Button></Link>
            </Paper>


    </Grid>

{/* xxxxxxxxxxxxxxx  Antonyms xxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
<Grid item xs={12} sm={12} md={3} >
            <Paper elevation={2} sx={{ backgroundColor:"#6090C7",color:"#fff",padding:2,margin:"auto",textAlign:"center"}}>
                <img src={ AntonymsImage} alt="" style={{width:"100%"}}/>
                <Link to="/Antonyms"><Button size="large" variant="contained" sx={{margin:"auto",textAlign:"center"}}> Play Quiz</Button></Link>
            </Paper>


    </Grid>

{/* xxxxxxxxxxxxxxxxxxxxx Preposition xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

    <Grid item xs={12} sm={12} md={3} >
            <Paper elevation={2} sx={{ backgroundColor:"#A28975",color:"#fff",padding:2,margin:"auto",textAlign:"center"}}>
                <img src={ PrepositionImage} alt="" style={{width:"100%"}}/>
                <Link to="/Prepositions"><Button size="large" variant="contained" sx={{margin:"auto",textAlign:"center"}}> Play Quiz</Button></Link>
            </Paper>


     </Grid>
{/* xxxxxxxxxxxxxxxxxxxxx Pronouns-Image xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

    <Grid item xs={12} sm={12} md={3} >
            <Paper elevation={2} sx={{ backgroundColor:"#ED9AA2",color:"#fff",padding:2,margin:"auto",textAlign:"center"}}>
                <img src={ PronounsImage} alt="" style={{width:"100%"}}/>
                <Link to="/Pronoun"><Button size="large" variant="contained" sx={{margin:"auto",textAlign:"center"}}> Play Quiz</Button></Link>
            </Paper>


     </Grid>
{/* xxxxxxxxxxxxxxxxxxxxx Tense-Image xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
    <Grid item xs={12} sm={12} md={3} >
            <Paper elevation={2} sx={{ backgroundColor:"#2FC7B5",color:"#fff",padding:2,margin:"auto",textAlign:"center"}}>
                <img src={ TenseImage} alt="" style={{width:"100%"}}/>
                <Link to="/Tense"><Button size="large" variant="contained" sx={{margin:"auto",textAlign:"center"}}> Play Quiz</Button></Link>
            </Paper>


     </Grid>
{/* xxxxxxxxxxxxxxxxxxxxx Misc-Image xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
    <Grid item xs={12} sm={12} md={3} >
            <Paper elevation={2} sx={{ backgroundColor:"#2CA342",color:"#fff",padding:2,margin:"auto",textAlign:"center"}}>
                <img src={ MiscImage} alt="" style={{width:"100%"}}/>
                <Link to="/Misc"><Button size="large" variant="contained" sx={{margin:"auto",textAlign:"center"}}> Play Quiz</Button></Link>
            </Paper>


     </Grid>
</Grid>

</Box>
</Box>


    </div>
  )
}
