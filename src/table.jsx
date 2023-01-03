import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack'



function Tables(props) {

  return (

    < >
      <div style={{ display: 'flow-root' }} >
        <Stack>
          <Paper sx={{ width: '300px', height: '500px', alignItems: 'center' }} >
            <p>*****</p>
            <img src={props.image} style={{ maxWidth: '150px', maxHeight: '150px' }} />

            <p>TITLE:{props.films.title}</p>
            <p>EPISODE{props.films.episode_id}</p>
            <p>DIRECTOR: {props.films.director}</p>
            <p>RELEASE DATE:{props.films.release_date}</p>


          </Paper>
        </Stack>
      </div>
    </>
  )
}
export default Tables