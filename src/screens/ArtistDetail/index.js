import React from 'react'
import { Box, Flex, Image, Text } from 'rebass'
import TopBar from '../../containers/TopBar'
import useArtistDetails from '../../hooks/useArtistDetails';

export default function ArtistDetail(props) {
    const { match: { params: { id }}} = props
    const result = useArtistDetails(id)
    const { imageurl, description, name } = result
    return (
        <Box>
            <TopBar />
            <Flex flexWrap='wrap' p={3}>
                <Box pr={3} flex={[1, 0.5, 0.4]}>
                    <Image width={1} src={imageurl} />
                </Box>
                <Box flex={[-1, 0.5, 0.6]}>
                    <Text>{name}</Text>
                    <Text>{description}</Text>
                </Box>
            </Flex>
        </Box>
    )
}