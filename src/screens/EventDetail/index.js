import React from 'react'
import { Box } from 'rebass'
import useEventDetails from '../../hooks/useEventDetails';
import TopBar from '../../containers/TopBar'

import GenreList from './GenreList';
import Description from './Description'
import LineUp from './LineUp'

export default function EventDetail(props) {

    const { match: { params: { id }}} = props
    const details = useEventDetails(id)
    const { genres = [], artists = [], eventname, description } = details

    return (
        <Box>
            <TopBar />
            <Box p={4}>
                <Description eventname={eventname} description={description}/>
                <GenreList genres={genres} />
                <LineUp artists={artists} />
            </Box>
        </Box>
    )
}