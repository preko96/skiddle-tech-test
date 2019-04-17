import React from 'react';
import { Text, Flex } from 'rebass';
import { ArtistCard } from './ArtistCard';

export default function LineUp({ artists }) {
    return (
        <>
            {artists.length > 0 && <Text fontWeight='bold'>Who's on the line-up?</Text>}
            <Flex flexWrap='wrap' m={-3}>
                {artists.map(({ artistid, image, name }) => (
                    <ArtistCard key={artistid} artistid={artistid} image={image} name={name}  />
                ))}
            </Flex>
        </>
    );
}


