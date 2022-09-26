import React from 'react'
import { Header } from '../../Components/Header/Header'
import { MisTrabajos } from './styles'
import { Projects } from '../../Components/Projects/Projects'
import { Footer } from '../../Components/Footer/Footer'

export const Portfolio = () => {
    return (
        <React.Fragment>
            <Header />
            <MisTrabajos>
                <p>Echa un ojo a mis proyectos 😃.</p>
            </MisTrabajos>
            <Projects
                projectSelection={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
            />
            <Footer />
        </React.Fragment>
    )
}
