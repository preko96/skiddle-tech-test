import React from 'react';
import { Text, Flex } from 'rebass';
export default function GenreList({ genres }) {
    return (
        <Flex flex={1}>
            <>
                {genres.length > 0 && <Text fontWeight='bold'>Music Genres:&nbsp;</Text>}
                {genres.map(({ name }, index) => (<>
                    <Text>{name}</Text>
                    {index !== genres.length - 1 && (<Text>,&nbsp;</Text>)}
                </>))}
            </>
        </Flex>
    );
}
