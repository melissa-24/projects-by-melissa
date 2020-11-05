import React from 'react'

import Org from './cards/Org'

const Organization = () => {
    return (
        <div className='projects'>
        <h2>These projects are Organizational Level Projects</h2>
        <h3>Team work was involved with these projects.</h3>
        <p>Some of these are still being updated others are not</p>
        <div className='current'>
            <Org />
        </div>
        </div>
    )
}

export default Organization