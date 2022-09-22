import React from 'react'

export const ProjectCard = ({ name, imgSrc, prjUrl, tech, keyNumber }) => {
    return (
        <React.Fragment>
            <section className="project-card">
                <div className="project-title">
                    <span>{name}</span>
                    <div className="project-tech">
                        {tech.map((techText) => {
                            return (
                                <span key={`tech-${keyNumber}-${techText}`}>
                                    {techText}
                                </span>
                            )
                        })}
                    </div>
                </div>
                <figure>
                    <img src={imgSrc} />
                </figure>
                <div className="project-link">
                    <a href={prjUrl} target="_blank">
                        Ver proyecto
                    </a>
                </div>
            </section>
        </React.Fragment>
    )
}
