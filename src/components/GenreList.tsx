import useGenre, { type Genre } from '@/hooks/useGenre'

const GenreList = () => {
    const {data}=useGenre()
  return (
    <ul>
        {data.map((g)=>(
            <li>{g.name}</li>
        ))}
    </ul>
  )
}

export default GenreList
