import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import { useEffect, useState } from 'react'
import type { Genre } from './hooks/useGenre'

const App = () => {

  const showSideBar=useBreakpointValue({base:false,lg:true})

  const [selectedGenre,setSelectedGenre]=useState<null | Genre>(null)


  return (
    <Grid
      templateAreas={{
        base:`"nav" "main" "footer"`,
        lg:`"nav nav" "aside main" "footer footer"`
      }}
    >
      <GridItem area={"nav"}>
        <NavBar/>
      </GridItem>

      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>

      {showSideBar &&(
        <GridItem area={"aside"} paddingX={"5"}>
          <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
      </GridItem>)}

      <GridItem area={"footer"} bg={"yellow"}>
        footer
      </GridItem>
    
    </Grid>
  )
}

export default App
