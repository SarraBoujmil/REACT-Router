import React from 'react'
import Movies from './Movies'

const Movie_list = ({aflem,search,rate}) => {
  console.log(search)
  let resultat =aflem && aflem.filter(el=>el.rate>=rate && el.title.toUpperCase().includes(search.toUpperCase()))
  console.log(resultat)
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
      {resultat.map(film=><Movies film={film}/>)}
      
      </div>
  )
}

export default Movie_list



