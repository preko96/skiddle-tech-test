import React from 'react'
import { Flex, Box } from 'rebass'
import TopBar from '../../containers/TopBar'
import EventCardList from './EventCardList'

export default function Search() {
    return (
        <Box>
            <TopBar withSearch />
            <Flex flexWrap='wrap' justifyContent='center' p={3}>
                <EventCardList />
            </Flex>
        </Box>
    )
}