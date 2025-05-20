import { Box, Grid, GridItem, Sticky, useBreakpointValue } from '@chakra-ui/react'
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
      <GridItem area={"nav"} position="sticky" top={0} zIndex={1} bg={'black'} >
        <NavBar/>
      </GridItem>

      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>

      {showSideBar &&(
        <GridItem area={"aside"} paddingX={"5"} 
          position="sticky"
          top={0} 
          height="85vh"
          overflowY="auto"
          css={{
              /*hide scroll bar*/
              "&::webkit-scrollbar":{
                display:'none',
              },
              msOverflowStyle:'none',
              scrollbarWidth:'none'
          }}>
          <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>)}

      <GridItem area={"footer"} bg={"yellow"} w="full">
        <Box w="full" textAlign="center" p={4}>
          footer
        </Box>
      </GridItem>
    
    </Grid>
  )
}

export default App
