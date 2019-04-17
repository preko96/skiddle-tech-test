import React from 'react'
import { Flex } from 'rebass'
import useSearchResults from '../../hooks/useSearchResults'
import EventCard from '../../containers/EventCard'

export default function CardList() {
    const data = useSearchResults()
    return data.map(event => (
        <Flex width={[1, 0.5, 1/3]} p={4} key={event.id}>
            <EventCard
                id={event.id}
                largeimageurl={event.largeimageurl}
                eventname={event.eventname}
                description={event.description}
                name={event.venue.name}
                town={event.venue.town}
                date={event.date}
            />
        </Flex>
    ))
}