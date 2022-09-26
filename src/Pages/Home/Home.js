import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Presentation } from './styles'
import { FotoPersonal } from './styles'
import fotoPersonal from '../../Assets/foto-personal.png'
import { MisTrabajos } from './styles'
import { Projects } from '../../Components/Projects/Projects'
import { Footer } from '../../Components/Footer/Footer'
import { Main } from './styles'
import { Todos } from './styles'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Main>
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
                    <img src={fotoPersonal} alt="Foto personal" />
                </FotoPersonal>
                <MisTrabajos>
                    <p>Mis trabajos.</p>
                </MisTrabajos>
                <Projects projectSelection={[2, 7, 8, 10, 11, 12, 13]} />
                <Todos>
                    <Link to="/portfolio">
                        <p>Ver todos</p>
                    </Link>
                </Todos>
            </Main>
            <Footer />
        </React.Fragment>
    )
}
