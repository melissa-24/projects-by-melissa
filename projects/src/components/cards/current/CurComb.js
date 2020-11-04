import React, { useEffect, useState } from 'react'

import withListLoading from '../withListLoading'
import List from '../List'

const CurCombined = (props) => {
    const ListLoading = withListLoading(List)
    const [appState, setAppState] = useState ({
        loading: false,
        projects: null,
    })

    useEffect(() => {
        setAppState({ loading: true })
        const baseURL = `https://then-n-now-projects.herokuapp.com/projects/1`
        fetch(baseURL)
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

export default CurCombined