import React from 'react'

import CurFs from './cards/current/CurFs'
import CurComb from './cards/current/CurComb'
import OldFs from './cards/old/OldFs'
import OldComb from './cards/old/OldComb'

const FullStack = () => {
    return (
        <div className='projects'>
        <h2>These projects are Full Stack Projects</h2>
        <h3>They have both a Front and Back End</h3>
        <div className='current'>
            <h4>On going or current true Full Stack projects (1 repository)</h4>
            <CurFs />
            <h4>On going or current Full Stack projects (2 repositories)</h4>
            <CurComb />
        </div>
        <div className='old'>
            <h4>Older projects no longer being updated (1 repository true Full Stack)</h4>
            <OldFs />
            <h4>Older projects no longer being updated (2 repositories)</h4>
            <OldComb />
        </div>
        </div>
    )
}

export default FullStack