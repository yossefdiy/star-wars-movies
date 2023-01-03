import axios from "axios";
import { useState,useEffect } from "react";
import image1 from './assets/m1.jpg'
import image2 from './assets/m2.jpg'
import image3 from './assets/m3.webp'
import Tables from './table'


import {Container,Button, Grid, Typography, setRef} from '@mui/material'

function Movie2(props){
  const [id2,setId2]= useState(2)

  const baseURL2 = `https://swapi.dev/api/films/2`

    const [films2, setFilms2]= useState({})
  
      useEffect(()=>{
        axios.get(baseURL2).then((response) => {
          setFilms2(response.data)
          console.log(response)
           }).catch(err=>{console.log(err)})

      },[id2])
     

      
      if (id2>6) setId2(1)
      
      
             
    
return(

    <>

{/*           
       <Container backgroundColor={'black'} color={'yellow'}>
         
      <Grid container rowSpacing={1}>
      <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center">       
  {films.title? <div className="state">TITle:{''}{"       "}{films.title}</div > : null}
  {films.episode_id? <p className="state">EPISODE:{"     "}{films.episode_id}</p> : null}
  {films.director? <p className="state">DIRECTOR:{"    "} {films.director} </p> : null}
  {films.release_date? <p className="state">RELEADE DATE:{'     '}{films.release_date} </p> : null}
  {films.characters   ? <p className="state">characters  :{'     '}{films.created} </p> : null}

      </Grid>
      </Grid> */}

      {/* </Container> */}
     <Tables films={films2} image={image2}/>

    </>
)

}
 export default  Movie2 
 
