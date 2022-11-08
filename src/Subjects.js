import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./Style.css";
import {Link} from "react-router-dom";
function Subjects(props){
    return(
        <>
     <div id="bgcolorsubjec" className='w-[100vw] h-[100vh] bg-green-500 flex justify-center items-center'>
       <div id="subjectmaindi" >
         <Card sx={{ maxWidth: 349 }}>
           <CardActionArea>
             <CardMedia
              component="img"
              height="196"
              image={props.img}
              alt="computer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">
              
             <Link to={props.url}>NEXT</Link>{/*problem is here i want to go at new page every time with click non each new card */}
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>  
       
        </>
    )
}

export default Subjects;