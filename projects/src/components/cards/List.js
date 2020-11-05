import React from 'react'


const List = (props) => {
    const { projects } = props
    if (!projects || projects.length === 0) return <p>More projects being added soon</p>
    if (projects.altSource ||projects.extraSource || projects.source === null) return <></>
    if (projects.altLink ||projects.extraLink || projects.link === null) return <></>
    return (
        <div className='cards'>
        {console.log(projects)}
        {projects.map((project) => {
            return (
                <div className='project-card' key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <h4>Project Source Links</h4>
                    <a href={project.source} target='_blank'>{project.source}</a>
                    <a href={project.altSource} target='_blank'>{project.altSource}</a>
                    <a href={project.extraSource} target='_blank'>{project.extraSource}</a>
                    <h4>Live Project Links (if any)</h4>
                    <a href={project.link} target='_blank'>{project.link}</a>
                    <a href={project.altLink} target='_blank'>{project.altLink}</a>
                    <a href={project.extraLink} target='_blank'>{project.extraLink}</a>
                </div>
            )
        })}
        </div>
    )
}

export default List