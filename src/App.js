import React, { createContext, useContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import useMethods from 'use-methods'
import AppContext from './contexts/AppContext'
import * as Screens from './screens'
import './index.css'

export default function App() {

    const [state, callbacks] = useMethods(methods, initialState);

    return (
        <Router>
            <AppContext.Provider value={[state, callbacks]}>
                <Route exact path='/' component={Screens.Search} />
                <Route path='/event/:id' component={Screens.EventDetail} />
                <Route path='/artist/:id' component={Screens.ArtistDetail} />
            </AppContext.Provider>
        </Router>
    )
}

const initialState = { keyword: '', result: {} }
const methods = state => ({
    change(value) { state.keyword = value },
    updateSearchResult(result) { state.result = result }
})