import React from 'react'
import { Link } from 'react-router-dom'
import hamburguerMenu from '../../Assets/hamburguer-menu.png'
import logoWhite from '../../Assets/logo-white.png'
import { MainHeader } from './styles'
import { Menu } from '../Menu/Menu'

export const Header = () => {
    const [toggle, setToggle] = React.useState(false)

    const handleMenuToggle = () => {
        setToggle(!toggle)
    }

    return (
        <React.Fragment>
            <MainHeader>
                <figure onClick={handleMenuToggle}>
                    <img src={hamburguerMenu} />
                </figure>
                <figure>
                    <Link to="/">
                        <img src={logoWhite} />
                    </Link>
                </figure>
            </MainHeader>
            {toggle ? <Menu /> : null}
        </React.Fragment>
    )
}
