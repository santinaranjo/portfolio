import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Presentation } from './styles'
import { FotoPersonal } from './styles'
import fotoPersonal from '../../Assets/foto-personal.png'
import { MisTrabajos } from './styles'
import { Footer } from '../../Components/Footer/Footer'
import { Main } from './styles'

export const Contact = () => {
    return (
        <React.Fragment>
            <Header />
            <Main>
                <FotoPersonal>
                    <img src={fotoPersonal} />
                </FotoPersonal>
                <MisTrabajos>
                    <p>Contacto.</p>
                </MisTrabajos>
                <Presentation>
                    <p>
                        <span className="first-line">Correo</span>
                        : softwaresoysanti@gmail.com
                        <br />
                        <span className="second-line">LinkedIn</span>:{' '}
                        <a
                            href="https://www.linkedin.com/in/mrsantinaranjo/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visitar
                        </a>
                    </p>
                </Presentation>
            </Main>
            <Footer />
        </React.Fragment>
    )
}
