import React from 'react';
import { Link } from 'react-router-dom'
import { Text, Flex, Image, Box } from 'rebass';

export function ArtistCard({ artistid, image, name }) {
    return (
        <Flex width={[1, 1 / 3, 1 / 4]} p={3} key={artistid}>
            <Box as={Link} to={`/artist/${artistid}`} style={{
                flexGrow: 1,
                boxShadow: '0 2px 16px rgba(0, 0, 0, 0.25)',
                borderRadius: 8,
                overflow: 'hidden'
            }}>
                <Image width={1} src={image} />
                <Text p={3}>{name}</Text>
            </Box>
        </Flex>
    );
}
