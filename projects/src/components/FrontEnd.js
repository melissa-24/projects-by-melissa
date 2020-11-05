import React from 'react'

import CurFe from './cards/current/CurFe'
import OldFe from './cards/old/OldFe'
import CurMulti from './cards/current/CurMulti'


const FrontEnd = () => {

    return (
        <div className='projects'>
        <h2>These projects are Front End Only Projects</h2>
        <div className='current'>
            <h4>On going or current Projects</h4>
            <CurFe />
            <h4>On going or current Projects (multiple repositories)</h4>
            <CurMulti />
        </div>
        <div className='old'>
            <h4>Older projects no longer being updated</h4>
            <OldFe />
        </div>
        </div>
    )
}

export default FrontEnd