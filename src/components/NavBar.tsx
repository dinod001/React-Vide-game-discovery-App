import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/react.svg'

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} padding={5} height={{base:"40px",md:"50px",lg:"90px"}}/>
      <Text fontSize={25} fontStyle={"bold"}>React Game Discovery APP</Text>
    </HStack>
  )
}

export default NavBar
