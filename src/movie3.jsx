import axios from "axios";
import { useState,useEffect } from "react";
import image1 from './assets/m1.jpg'
import image2 from './assets/m2.jpg'
import image3 from './assets/m3.webp'
import Tables from './table'


import {Container,Button, Grid, Typography, setRef} from '@mui/material'

function Movie3(props){
  const [id3,setId3]= useState(3)

  const baseURL3 = `https://swapi.dev/api/films/3`

    const [films3, setFilms3]= useState({})
  
      useEffect(()=>{
        axios.get(baseURL3).then((response) => {
          setFilms3(response.data)
          console.log(response)
           }).catch(err=>{console.log(err)})

      },[id3])
     

      
      if (id3>6) setId3(1)
      
      
             
    
return(

    <>
           

     <Tables films={films3} image={image3}/> 

    </>
)

}
 export default  Movie3 
 
