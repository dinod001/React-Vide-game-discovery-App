import useGenre from '@/hooks/useGenre'
import React from 'react'

const GenreList = () => {
    const {genre}=useGenre()
  return (
    <ul>
        {genre.map((g)=>(
            <li>{g.name}</li>
        ))}
    </ul>
  )
}

export default GenreList
