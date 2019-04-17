import React, { useContext, useEffect } from 'react'
import { Flex, Box, Image } from 'rebass'
import { Link } from 'react-router-dom'
import API from '../../networking'
import useFetch from '../../hooks/useFetch'
import AppContext from '../../contexts/AppContext'
import SkiddleLogo from '../../images/skiddle-logo-white-landscape.png'
import Search from './TopBarSearch'

export default function TopBar({ withSearch }) {
    const [{ keyword }, { change, updateSearchResult }] = useContext(AppContext);
    const [data, start] = useFetch(API.search)

    useEffect(() => { start(keyword) }, [keyword])
    useEffect(() => updateSearchResult(data), [data])

    return (
        <Flex flexDirection='column' alignItems='center' bg='#47c3be' p={3}>
            <Link to='/'>
                <Image width={[160, 200, 240]} height={[60, 75, 90]} src={SkiddleLogo} />
            </Link>
            {withSearch && (
                <Box width={[1, 0.75, 0.5]}>
                    <Search value={keyword} onChange={e => change(e.target.value)} placeholder='search for events' />
                </Box>
            )}
        </Flex>
    )
}