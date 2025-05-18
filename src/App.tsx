import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import GameGrid from './components/GameGrid'

const App = () => {
  const showSideBar=useBreakpointValue({base:false,lg:true})
  return (
    <Grid
      templateAreas={{
        base:`"nav" "main" "footer"`,
        lg:`"nav nav" "aside main" "footer footer"`
      }}
    >
      <GridItem area={"nav"} bg={"blue"}>
        navBar
      </GridItem>
      <GridItem area={"main"} bg={"red"}>
        <GameGrid/>
      </GridItem>
      {showSideBar &&(
        <GridItem area={"aside"} bg={"green"}>
        aside
      </GridItem>)}
      <GridItem area={"footer"} bg={"yellow"}>
        footer
      </GridItem>
    
    </Grid>
  )
}

export default App
