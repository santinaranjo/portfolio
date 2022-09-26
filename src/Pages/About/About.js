import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Presentation } from './styles'
import { FotoPersonal } from './styles'
import fotoPersonal from '../../Assets/foto-personal.png'
import { MisTrabajos } from './styles'
import { Footer } from '../../Components/Footer/Footer'
import { Main } from './styles'

export const About = () => {
    return (
        <React.Fragment>
            <Header />
            <Main>
                <MisTrabajos>
                    <p>Sobre mí.</p>
                </MisTrabajos>
                <FotoPersonal>
                    <img src={fotoPersonal} />
                </FotoPersonal>
                <Presentation>
                    <p>
                        <span className="first-line">
                            Hola! Soy Santi 😃. Desarrollador web front-end.{' '}
                        </span>
                        <br />
                        <span className="second-line">
                            Apasionado de la programación y el diseño.
                        </span>
                        <br />
                        <span className="third-line">
                            Me encantan los retos y poder evolucionar
                            constantemente.
                        </span>
                    </p>
                </Presentation>
            </Main>
            <Footer />
        </React.Fragment>
    )
}
