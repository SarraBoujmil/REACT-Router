import React from 'react'
import {Button, Card} from 'react-bootstrap'
import {Data} from '../Data'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'
const Movies = ({film}) => {
  return (
   <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={film.posterUrl} width="200px" />
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        <Card.Text>
          {film.description}
        </Card.Text>
        <ReactStars
        count={5}
        value={film.rate}
        size={24}
        edit={false}
         color2={'#ffd700'}/>
        <p>{film.rate}</p>
        <Link to={`/film/${film.id}`}>
        <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
   </div> 
    
    
  )
}

export default Movies