import axios from "axios";
import { useState,useEffect } from "react";
import image1 from './assets/m1.jpg'
import image2 from './assets/m2.jpg'
import image3 from './assets/m3.webp'
import image6 from './assets/m6.jpg'

import Tables from './table'


import {Container,Button, Grid, Typography, setRef} from '@mui/material'

function Movie6(props){
  const [id6,setId6]= useState(6)

  const baseURL6 = `https://swapi.dev/api/films/6`

    const [films6, setFilms6]= useState({})
  
      useEffect(()=>{
        axios.get(baseURL6).then((response) => {
          setFilms6(response.data)
          console.log(response)
           }).catch(err=>{console.log(err)})

      },[id6])
     

      
      if (id6>6) setId6(1)
      
      
             
    
return(

    <>


       <Tables films={films6} image={image6} />

    </>
)

}
 export default  Movie6
 
