import React from 'react'
import { Link } from 'react-router-dom'
import { MenuCard } from './styles'

export const Menu = () => {
    return (
        <MenuCard>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
                <li>
                    <Link to="/about">Sobre mí</Link>
                </li>
            </ul>
        </MenuCard>
    )
}
