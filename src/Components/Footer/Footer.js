import React from 'react'
import { Link } from 'react-router-dom'
import logoWhite from '../../Assets/logo-white.png'
import { MainFooter } from './styles'
import { SocialMedia } from './styles'
import linkedInLogo from '../../Assets/linkedIn.png'
import githubLogo from '../../Assets/github.png'

export const Footer = () => {
    return (
        <React.Fragment>
            <MainFooter>
                <figure>
                    <Link to="/">
                        <img src={logoWhite} alt="logo" />
                    </Link>
                </figure>
                <SocialMedia>
                    <figure>
                        <a
                            href="https://www.linkedin.com/in/mrsantinaranjo/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedInLogo} alt="linkedIn" />
                        </a>
                        <a
                            href="https://github.com/santinaranjo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={githubLogo} alt="github" />
                        </a>
                    </figure>
                </SocialMedia>
            </MainFooter>
        </React.Fragment>
    )
}
