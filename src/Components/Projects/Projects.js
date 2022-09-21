import React from 'react'
import { MyProjects } from './stiles'
import { ProjectCard } from '../ProjectCard/ProjectCard'

import googlePreview from '../../Assets/google-clone-preview.png'
import batatabitPreview from '../../Assets/batatabit-mobile-preview.png'
import foodGridPreview from '../../Assets/food-grid-preview.png'
import platziGamesPug from '../../Assets/platzi-games-pug-preview.png'
import platziGamesLess from '../../Assets/platzi-games-less.png'
import platziGamesSass from '../../Assets/platzi-games-sass.png'
import geometryBot from '../../Assets/geometry-bot-preview.png'
import percentagesCalculator from '../../Assets/percentages-calculator-preview.png'
import mediaPlayer from '../../Assets/media-player-preview.png'

const GOOGLE_CLONE = 'https://santinaranjo.github.io/Google-Clone/'
const BATATABIT_MOBILE =
    'https://santinaranjo.github.io/mobile-first-batatabit/'
const FOOD_GRID = 'https://santinaranjo.github.io/food-css-grid/'
const PLATZI_GAMES_PUG =
    'https://santinaranjo.github.io/platzi-games-pug/landing.html'
const PLATZI_GAMES_LESS =
    'https://santinaranjo.github.io/platzi-games-less/html/articulo.html'
const PLATZI_GAMES_SASS =
    'https://santinaranjo.github.io/platzi-games-final-sass-grid/html/pagina-principal.html'
const GEOMETRY_BOT =
    'https://santinaranjo.github.io/geometry-bot/html/figuras.html'
const PERCENTAGES_CALCULATOR =
    'https://santinaranjo.github.io/percentages-calculator/html/index.html'
const MEDIA_PLAYER = 'https://santinaranjo.github.io/platzi-media-player/'

export const Projects = () => {
    return (
        <React.Fragment>
            <MyProjects>
                <section className="project-container">
                    {/* <section className="project-card">
                        <div className="project-title">
                            <span>Media Player</span>
                            <div className="project-tech">
                                <span>JS</span>
                            </div>
                        </div>
                        <figure>
                            <img src={mediaPlayer} />
                        </figure>
                        <div className="project-link">
                            <a href={MEDIA_PLAYER} target="_blank">
                                Ver proyecto
                            </a>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-title">
                            <span>% Calculator</span>
                            <div className="project-tech">
                                <span>JS</span>
                                <span>PUG</span>
                                <span>SASS</span>
                            </div>
                        </div>
                        <figure>
                            <img src={percentagesCalculator} />
                        </figure>
                        <div className="project-link">
                            <a href={PERCENTAGES_CALCULATOR} target="_blank">
                                Ver proyecto
                            </a>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-title">
                            <span>Geometry Bot</span>
                            <div className="project-tech">
                                <span>JS</span>
                                <span>PUG</span>
                                <span>SASS</span>
                            </div>
                        </div>
                        <figure>
                            <img src={geometryBot} />
                        </figure>
                        <div className="project-link">
                            <a href={GEOMETRY_BOT} target="_blank">
                                Ver proyecto
                            </a>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-title">
                            <span>Platzi Games Sass</span>
                            <div className="project-tech">
                                <span>HTML</span>
                                <span>SASS</span>
                            </div>
                        </div>
                        <figure>
                            <img src={platziGamesSass} />
                        </figure>
                        <div className="project-link">
                            <a href={PLATZI_GAMES_SASS} target="_blank">
                                Ver proyecto
                            </a>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-title">
                            <span>Platzi Games Less</span>
                            <div className="project-tech">
                                <span>HTML</span>
                                <span>LESS</span>
                            </div>
                        </div>
                        <figure>
                            <img src={platziGamesLess} />
                        </figure>
                        <div className="project-link">
                            <a href={PLATZI_GAMES_LESS} target="_blank">
                                Ver proyecto
                            </a>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-title">
                            <span>Platzi Games Pug</span>
                            <div className="project-tech">
                                <span>HTML</span>
                                <span>PUG</span>
                            </div>
                        </div>
                        <figure>
                            <img src={platziGamesPug} />
                        </figure>
                        <div className="project-link">
                            <a href={PLATZI_GAMES_PUG} target="_blank">
                                Ver proyecto
                            </a>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-title">
                            <span>Food Grid</span>
                            <div className="project-tech">
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                        </div>
                        <figure>
                            <img src={foodGridPreview} />
                        </figure>
                        <div className="project-link">
                            <a href={FOOD_GRID} target="_blank">
                                Ver proyecto
                            </a>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-title">
                            <span>Batatabit Mobile</span>
                            <div className="project-tech">
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                        </div>
                        <figure>
                            <img src={batatabitPreview} />
                        </figure>
                        <div className="project-link">
                            <a href={BATATABIT_MOBILE} target="_blank">
                                Ver proyecto
                            </a>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-title">
                            <span>Google Clone</span>
                            <div className="project-tech">
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                        </div>
                        <figure>
                            <img src={googlePreview} />
                        </figure>
                        <div className="project-link">
                            <a href={GOOGLE_CLONE} target="_blank">
                                Ver proyecto
                            </a>
                        </div>
                    </section> */}
                    <ProjectCard
                        name="test"
                        imgSrc={geometryBot}
                        prjUrl={GEOMETRY_BOT}
                        tech={['TEST', 'JS']}
                    />
                </section>
            </MyProjects>
        </React.Fragment>
    )
}
