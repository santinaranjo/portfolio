import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Presentation } from './styles'
import { FotoPersonal } from './styles'
import fotoPersonal from '../../Assets/foto-personal.png'
import { MisTrabajos } from './styles'
import { Projects } from '../../Components/Projects/Projects'

export const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Presentation>
                <p>
                    <span className="first-line">Hola!</span> 😃
                    <br />
                    <span className="second-line">Soy Santi</span>,
                    <br />
                    <span className="third-line">
                        Desarrollador Web Front-End
                    </span>
                    .
                </p>
            </Presentation>
            <FotoPersonal>
                <img src={fotoPersonal} />
            </FotoPersonal>
            <MisTrabajos>
                <p>Mis trabajos.</p>
            </MisTrabajos>
            <Projects projectSelection={[2, 7, 8, 10, 11, 12, 13]} />
        </React.Fragment>
    )
}
