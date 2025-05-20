import { Box, Grid, GridItem, Sticky, useBreakpointValue } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import {useState } from 'react'
import type { Genre } from './hooks/useGenre'
import PlatFromSelector from './components/PlatFromSelector'
import type { Platform } from './hooks/useGames'

export interface GameQuery{
  genre:Genre|null,
  platform:Platform|null
}

const App = () => {

  const showSideBar=useBreakpointValue({base:false,lg:true})

  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)

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

      <GridItem area={"main"} paddingY={5}>
        <PlatFromSelector setSelectedPaltform={(platform)=>setGameQuery({...gameQuery,platform})} selectedPaltform={gameQuery.platform}/>
        <GameGrid gameQuery={gameQuery}/>
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
          <GenreList 
          onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}
          selectedGenre={gameQuery.genre}/>
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
