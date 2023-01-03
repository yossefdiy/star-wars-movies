import axios from "axios";
import { useState,useEffect } from "react";
import image1 from './assets/m1.jpg'
import image2 from './assets/m2.jpg'
import image3 from './assets/m3.webp'
import image4 from './assets/m4.jpg'

import Tables from './table'


import {Container,Button, Grid, Typography, setRef} from '@mui/material'

function Movie4(props){
  const [id4,setId4]= useState(4)

  const baseURL4 = `https://swapi.dev/api/films/4`

    const [films4, setFilms4]= useState({})
  
      useEffect(()=>{
        axios.get(baseURL4).then((response) => {
          setFilms4(response.data)
          console.log(response)
           }).catch(err=>{console.log(err)})

      },[id4])
     

      
      if (id4>6) setId4(1)
      
      
             
    
return(

    <>


       <Tables films={films4} image={image4} />

    </>
)

}
 export default  Movie4
 
