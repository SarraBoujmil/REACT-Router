import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const Trailer = ({aflem}) => {
  
    const {id}= useParams()
    console.log(id)
    const movie= aflem.find((el)=>el.id==id)
    return (
    <div>
       <h1>{movie.title}</h1>
       <iframe src={movie.trailer}> </iframe>
      <Link to={'/Movies'}>
       <Button link>Link</Button>
       </Link>
    </div>
  )
}

export default Trailer