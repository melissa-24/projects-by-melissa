import React from 'react'


const CurProjects = (props) => {
    const { projects } = props
    if (!projects || projects.length === 0) return <p>Adding Projects</p>
    if (projects.extraSource === null) return <p></p>
    return (
        <>
        </>
    )
}

export default CurProjects