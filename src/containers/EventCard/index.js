import React from 'react'
import { Flex, Image, Box, Button, Text } from 'rebass'
import { Link } from 'react-router-dom'

export default function EventCard({ id, largeimageurl, eventname, description, name, town, date, ...rest }) {
    return (
        <Flex flexDirection='column' bg='white' flex={1} style={{
            boxShadow: '0 2px 16px rgba(0, 0, 0, 0.25)'
        }}>
            <Image
                width={1}
                src={largeimageurl}
            />
            <Flex flexDirection='column' p={3} flex={1}>
                <Box flex={1}>
                    <Text py={2}>{eventname}</Text>
                    <Text py={2}>{description}</Text>
                    <Text py={2}>{name} {town}</Text>
                    <Text py={2}>{date}</Text>
                </Box>
                <Link to={`/event/${id}`}>
                    <Button width={1}>view details</Button>
                </Link>
            </Flex>
        </Flex>
    )
}