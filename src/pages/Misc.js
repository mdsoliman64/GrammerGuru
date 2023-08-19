import {React,useEffect,useState} from 'react';
import Menu from '../components/Menu';
import axios from "axios";
import { Box,Paper,Grid, Typography,Button,LinearProgress} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Footer from '../components/Footer';
export default function Tense(props) {
    const [data,setData]= useState([]);
    const url = process.env.REACT_APP_MISC
   
    useEffect(() => {
          axios.get(url) // Replace with your server API endpoint
              .then(response => {
                setData(response.data);
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
     }, []);

     const [userAnswer, setUserAnswer] = useState("");
     const [count , setCount] =useState(0);
     const [rightAnswer,setRightAnswer]=useState(0);
     const [wrongAnswer,setWrongAnswer]=useState(0);

     function changeHandle(event){
      const value = event.target.value;
      setUserAnswer(value);
     }

function submit(){
if(count < data.length ){
  setCount(prev => prev+=1);
  if(data[count].Answer === userAnswer){
    setRightAnswer(prev => prev+=1);
   }else{
    setWrongAnswer(prev=>prev+=1)
   } 



}else if(count >= data.length){
  setCount(0); 
  setRightAnswer(0);
  setWrongAnswer(0)
 
};
 

}

let [time,setTime]=useState(0);
function timer(){
  const hour=   new Date().getHours() ;
  let status ;
  if(hour <13){
    status= " AM";
  }else{
    status = " PM";
  }
    setInterval(()=>{
        const date = new Date();
      
        setTime(()=>{
            if(hour <=13){
              return   date.getHours() +":"+date.getMinutes()+":"+date.getSeconds() + status;
            }else{
              return date.getHours()-12 +":"+date.getMinutes()+":"+date.getSeconds()+ status;
            }
        });
},1100);
}
timer();




  return (
    <div>
<Menu/>
<Grid container spacing={0} sx={{marginTop:3,padding:0}}>

    <Grid item xs={12} sm={12} md={4} sx={{padding:4}}>
    <Typography variant='h2' components="h1" sx={{color:"#6090c7",fontWeight:"bold",textAlign:"center"}}> 
                {data[count]?.Topic}
    </Typography>
    <Typography variant="h5"> User Name: {props.name}</Typography>
    <Typography variant="h5"> Total Question: {data.length}</Typography>
    <Typography variant="h5"> correct Answer: {rightAnswer} </Typography>
    <Typography variant="h5"> Wrong Answer: {wrongAnswer}</Typography>
    <Typography variant="h5"> Your Answer: {userAnswer}</Typography>
    <Typography variant="h5"> Time : {time} </Typography>


    </Grid>

{/* xxxxxxxxxxxxxxxxxxxx Quiz Start from Here xxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        <Grid item xs={12} sm={12} md={8} sx={{padding:4}}>

                <Paper elevation={2} sx={{backgroundColor:"#001A3D",color:"#fff",padding:5,borderLeft:"10px solid #6cba3a"}}>
                      <Typography variant="h4">{count + 1} . {data[count]?.Question} </Typography>
                      
                      <Grid container spacing={2} sx={{marginTop:2}}>
                        <Grid item xs={12} sm={12} md={6}>
                                        <Button variant="contained" sx={{backgroundColor:"#6CBA3A",color:"#fff","&:hover":{backgroundColor:"#fff",color:"#000"}}}>
                                          <input onChange={changeHandle} type="radio" value="A" name={data[count]?.Topic}
                                             style={{width:"20px",height:"20px"}}

                                          />{data[count]?.optionA}
                                        </Button>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6}>
                                        <Button variant="contained" sx={{backgroundColor:"#6CBA3A",color:"#fff","&:hover":{backgroundColor:"#fff",color:"#000"}}}>
                                          <input  onChange={changeHandle} value="B" type="radio" name={data[0]?.Topic}
                                               style={{width:"20px",height:"20px"}}

                                          />{data[count]?.optionB}
                                        </Button>
                        </Grid>


                        <Grid item xs={12} sm={12} md={6}>
                                        <Button variant="contained" sx={{backgroundColor:"#6CBA3A",color:"#fff","&:hover":{backgroundColor:"#fff",color:"#000"}}}>
                                          <input  onChange={changeHandle} value="C" type="radio" name={data[count]?.Topic}
                                           style={{width:"20px",height:"20px"}}

                                          />{data[count]?.optionC}
                                        </Button>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6}>
                                        <Button variant="contained" sx={{backgroundColor:"#6CBA3A",color:"#fff","&:hover":{backgroundColor:"#fff",color:"#000"}}}>
                                          <input  onChange={changeHandle} value="D" type="radio" name={data[0]?.Topic}
                                            style={{width:"20px",height:"20px"}}
                                          /> 
                                          
                                          {data[count]?.optionD}
                                        </Button>
                        </Grid>
                      </Grid>
                      <Box sx={{marginTop:2}}>

                     
                            <Button onClick={submit} variant='outlined' sx={{width:"80%",color:"#6CBA3A",border:"1px solid #6CBA3A","&:hover":{backgroundColor:"#fff",color:"#000",fontSize:"0.8 rem"}}}>
                            Submit Answer
                             
                             </Button>
                                              
                      </Box>
                     
                      <Box sx={{marginTop:3}}>
                            <LinearProgress variant="buffer" value={rightAnswer} valueBuffer={rightAnswer + wrongAnswer}/>
                      </Box>
                      <Box sx={{marginTop:5}}>
                      <Typography variant="h6" sx={{color:"#6CBA3A"}}> Time : {time} </Typography>
                      </Box>

                      <Box sx={{marginTop:2}}>

                     
                      <Button variant='outlined' href="/">
                            <HomeIcon/>Home 
                       </Button>
                                              
                      </Box>
                      <Box>
                        <Footer/>
                      </Box>
                </Paper>
      
     
        </Grid>

</Grid>



    </div>
  )
}
