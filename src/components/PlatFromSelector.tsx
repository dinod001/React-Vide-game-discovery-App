import usePlatforms from '@/hooks/usePlatforms'
import { Button, Menu, Portal } from '@chakra-ui/react'
import React from 'react'


const PlatFromSelector = () => {
    const {data,error}=usePlatforms()

    if(error) return null
    
    return (
        <Menu.Root>
        <Menu.Trigger asChild>
            <Button variant="outline" size="sm">
            Platform Selector
            </Button>
        </Menu.Trigger>
        <Portal>
            <Menu.Positioner>
            <Menu.Content width={"20%"} overflow={"auto"}>
                {data.map((platform)=>(
                <Menu.Item value={platform.name}>{platform.name}</Menu.Item>
                ))}
            </Menu.Content>
            </Menu.Positioner>
        </Portal>
        </Menu.Root>
    )
}

export default PlatFromSelector
