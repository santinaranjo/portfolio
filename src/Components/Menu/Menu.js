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
                <li>Portfolio</li>
                <li>Contacto</li>
                <li>Sobre mí</li>
            </ul>
        </MenuCard>
    )
}
