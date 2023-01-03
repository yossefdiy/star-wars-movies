import axios from "axios";
import { useState,useEffect } from "react";
import image1 from './assets/m1.jpg'
import image2 from './assets/m2.jpg'
import image3 from './assets/m3.webp'
import Tables from './table'


import {Container,Button, Grid, Typography, setRef} from '@mui/material'
import { render } from "react-dom";
import Movie2 from "./movie2";

function Apirequest(props){
  const [id,setId]= useState(1)

  const baseURL = `https://swapi.dev/api/films/${id}`

    const [films, setFilms]= useState({})
  
      useEffect(()=>{
        axios.get(baseURL).then((response) => {
          setFilms(response.data)
          console.log(response)
           }).catch(err=>{console.log(err)})

      },[id])
      if (id==2) props.render('movie 2')
      if (id==3) props.render('movie 3')
      if (id==4) props.render('movie 4')
      if (id==5) props.render('movie 5')
      if (id==6) props.render('movie 6')


      
      if (id>6) setId(1)
      
      
             
    
return(
<div>

<Tables   films={films} image={image1}/>


</div>

)



}
 export default  Apirequest 
 
