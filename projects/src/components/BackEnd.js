import React from 'react'

import Cur from './cards/current/CurBe'
import Old from './cards/old/OldBe'

const BackEnd = () => {
    return (
        <div className='projects'>
        <h2>These projects are Back End Only Projects</h2>
        <div className='current'>
            <h4>On going or current Projects</h4>
            <Cur />
        </div>
        <div className='old'>
            <h4>Older projects no longer being updated</h4>
            <Old />
        </div>
        </div>
    )
}

export default BackEnd