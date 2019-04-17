import { useState, useEffect } from 'react'

const initialState = {
    data: null,
    pending: true,
    error: false,
}

// a very simple mockup

export default function useFetch(fetcher) {
    const [state, setState] = useState(initialState)

    const start = (...args) => {
        setState({ ...state, pending: true})
        fetcher(...args)
        .then(response => {
            setState({data: response.data, error: false, pending: false})
        })
        .catch(error => {
            setState({data: null, error, pending: false})
        })
    }

    return [state, start]
}