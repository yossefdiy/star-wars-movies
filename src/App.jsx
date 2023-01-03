import './App.css'
import headerImage from './assets/headerImage.webp'
import * as React from 'react';


import {Grid} from '@mui/material'
import Apirequest from './api'
import { height } from '@mui/system'
import Movie2 from './movie2'
import Movie3 from './movie3'
import Movie4 from './movie4'
import Movie5 from './movie5'
import Movie6 from './movie6'
import { useState } from 'react';
import {AppBar,Typography,Toolbar,Button,Box} from '@mui/material'


function App(){

  const [show,setShow]=useState(1)

if (show>6) setShow(1)

  return(
    
    <div className='app'>
<AppBar sx={{alignItems:'center'}} >
  <Toolbar  variant="dense">
    <Typography fontFamily={'kenia'} variant="h6" color="inherit" component="div" fontSize={'40px'}>
      star wars all movies
    </Typography>

  </Toolbar>




</AppBar>
{/* <h2>star wars movies</h2> */}
<Box sx={{display:'flax', width:'300px',height:'500px',backgroundColor:'black'}}>


    
     {show==1? <Apirequest/>:null}  
     {show==2? <Movie2/>:!show}
     {show==3? <Movie3/>:null}
     {show==4? <Movie4/>:null}
     {show==5? <Movie5/>:null}
     {show==6? <Movie6/>:null}=
     <Button sx={{backgroundColor:'black',width:'100%'}} onClick={()=>setShow(show+1)}>next movie</Button>

     </Box>






     </div>
    

  )
}


export default App