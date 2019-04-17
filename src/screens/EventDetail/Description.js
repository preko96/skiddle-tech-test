import React from 'react';
import { Text } from 'rebass';
export default function Description({ eventname, description }) {
    return (
        <>
            <Text fontWeight='bold'>{eventname}</Text>
            <Text>{description}</Text>
        </>
    );
}
