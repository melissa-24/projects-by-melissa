import React, { useState, useEffect } from 'react'

import withListLoading from '../withListLoading'
import List from '../List'


const MultiSource = () => {

    const ListLoading = withListLoading(List)
    const [appState, setAppState] = useState ({
        loading: false,
        projects: null,
    })

    useEffect(() => {
        setAppState({ loading: true })
        const url = `https://then-n-now-projects.herokuapp.com/projects/5`
        fetch(url)
            .then((res) => res.json())
            .then((projects) => {
                setAppState({ loading: false, projects: projects.data})
            })
    }, [setAppState])

    return (
        <>
        <ListLoading isLoading={appState.loading} projects={appState.projects} />
        </>
    )
}

export default MultiSource