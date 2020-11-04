import React from 'react'

import Org from './cards/Org'

const Organization = () => {
    return (
        <>
        <h2>These projects are Organizational Level Projects</h2>
        <h4>Team work was involved with these projects.</h4>
        <div className='current'>
            <h4>Some of these are still being updated others are not</h4>
            <Org />
        </div>
        </>
    )
}

export default Organization