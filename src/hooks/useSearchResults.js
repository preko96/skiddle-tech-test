import { useContext } from 'react'
import AppContext from '../contexts/AppContext'

export default function useSearchResults()  {
    const [appState] = useContext(AppContext)
    const { data } = appState.result || {}
    const { results } = data || []
    return results || []
}