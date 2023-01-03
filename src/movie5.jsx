import axios from "axios";
import { useState,useEffect } from "react";
import image1 from './assets/m1.jpg'
import image2 from './assets/m2.jpg'
import image3 from './assets/m3.webp'
import image5 from './assets/m5.jpg'

import Tables from './table'


import {Container,Button, Grid, Typography, setRef} from '@mui/material'

function Movie5(props){
  const [id5,setId5]= useState(5)

  const baseURL5 = `https://swapi.dev/api/films/5`

    const [films5, setFilms5]= useState({})
  
      useEffect(()=>{
        axios.get(baseURL5).then((response) => {
          setFilms5(response.data)
          console.log(response)
           }).catch(err=>{console.log(err)})

      },[id5])
     

      
      if (id5>6) setId5(1)
      
      
             
    
return(

    <>


       <Tables films={films5} image={image5} />

    </>
)

}
 export default  Movie5
 
