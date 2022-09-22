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
import simpleWeatherApp from '../../Assets/simple-weather-app.png'
import todoList from '../../Assets/todo-list.png'
import socialMediaApp from '../../Assets/social-media-app.png'
import pokeCards from '../../Assets/poke-cards.png'

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
const SIMPLE_WEATHER_APP =
    'https://santinaranjo.github.io/simple-weather-app/index.html'
const TODO_LIST = 'https://santinaranjo.github.io/todo-list-react/'
const SOCIAL_MEDIA_APP = 'https://petgram-react-fawn.vercel.app/'
const POKE_CARDS =
    'https://santinaranjo.github.io/poke-cards/#/oneplayer-notime'

export const Projects = () => {
    const projectList = [
        {
            name: 'PokeCards',
            imgSrc: pokeCards,
            prjUrl: POKE_CARDS,
            tech: ['TS', 'REACT', 'RECOIL'],
            id: 13,
        },
        {
            name: 'Social Media',
            imgSrc: socialMediaApp,
            prjUrl: SOCIAL_MEDIA_APP,
            tech: ['REACT', 'VERCEL'],
            id: 12,
        },
        {
            name: 'Todo List',
            imgSrc: todoList,
            prjUrl: TODO_LIST,
            tech: ['REACT'],
            id: 11,
        },
        {
            name: 'Weather App',
            imgSrc: simpleWeatherApp,
            prjUrl: SIMPLE_WEATHER_APP,
            tech: ['API', 'JS'],
            id: 10,
        },
        {
            name: 'Media Player',
            imgSrc: mediaPlayer,
            prjUrl: MEDIA_PLAYER,
            tech: ['JS'],
            id: 9,
        },
        {
            name: '% Calculator',
            imgSrc: percentagesCalculator,
            prjUrl: PERCENTAGES_CALCULATOR,
            tech: ['JS', 'PUG', 'SASS'],
            id: 8,
        },
        {
            name: 'Geometry Bot',
            imgSrc: geometryBot,
            prjUrl: GEOMETRY_BOT,
            tech: ['JS', 'PUG', 'SASS'],
            id: 7,
        },
        {
            name: 'Platzi Games Sass',
            imgSrc: platziGamesSass,
            prjUrl: PLATZI_GAMES_SASS,
            tech: ['HTML', 'SASS'],
            id: 6,
        },
        {
            name: 'Platzi Games Less',
            imgSrc: platziGamesLess,
            prjUrl: PLATZI_GAMES_LESS,
            tech: ['HTML', 'LESS'],
            id: 5,
        },
        {
            name: 'Platzi Games Pug',
            imgSrc: platziGamesPug,
            prjUrl: PLATZI_GAMES_PUG,
            tech: ['HTML', 'PUG'],
            id: 4,
        },
        {
            name: 'Food Grid',
            imgSrc: foodGridPreview,
            prjUrl: FOOD_GRID,
            tech: ['HTML', 'CSS'],
            id: 3,
        },
        {
            name: 'Batatabit Mobile',
            imgSrc: batatabitPreview,
            prjUrl: BATATABIT_MOBILE,
            tech: ['HTML', 'CSS'],
            id: 2,
        },
        {
            name: 'GoogleClone',
            imgSrc: googlePreview,
            prjUrl: GOOGLE_CLONE,
            tech: ['HTML', 'CSS'],
            id: 1,
        },
    ]

    return (
        <React.Fragment>
            <MyProjects>
                <section className="project-container">
                    {projectList.map((data) => {
                        return (
                            <ProjectCard
                                name={data.name}
                                imgSrc={data.imgSrc}
                                prjUrl={data.prjUrl}
                                tech={data.tech}
                                key={data.id}
                                keyNumber={data.id}
                            />
                        )
                    })}
                </section>
            </MyProjects>
        </React.Fragment>
    )
}
