import React from 'react'
import paprikaImg from '../assets/images/paprika.JPG'
import tetrisImg from '../assets/images/tetris.JPG'
import artistryImg from '../assets/images/artistry.JPG'
import shortcuttImg from '../assets/images/shortcutt.JPG'
import portfolioImg from '../assets/images/portfolio.JPG'
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg'
import { ReactComponent as FirebaseIcon } from '../assets/icons/firebase.svg'
import { ReactComponent as JsIcon } from '../assets/icons/js.svg'
import { ReactComponent as SassIcon } from '../assets/icons/sass.svg'
import { ReactComponent as HtmlIcon } from '../assets/icons/html.svg'
import { ReactComponent as CssIcon } from '../assets/icons/css.svg'
import { ReactComponent as JQueryIcon } from '../assets/icons/jquery.svg'
import { ReactComponent as NodeIcon } from '../assets/icons/nodejs.svg'
import { ReactComponent as NetlifyIcon } from '../assets/icons/netlify.svg'
import { ReactComponent as MongoIcon } from '../assets/icons/mongodb.svg'


const projectsData = [

    {   title: 'paprika', 
        description: 'Recipe web app built with React framework and Firebase database. Includes CRUD operations, live updates for ‘likes’, rating, reviews, Google login, search by keywords (with no extra libraries used), custom hooks, and full nutritional analysis (using Edamam API). Design inspired by Material-Ui framework', 
        stack: [    {name: 'react', icon: <ReactIcon/>}, 
                    {name: 'firebase', icon: <FirebaseIcon/>}, 
                    {name: 'sass', icon: <SassIcon/>},
                    {name: 'netlify', icon: <NetlifyIcon/>}, 
                    {name: 'edamam API', icon: null}, 
                ], 
        img: paprikaImg, 
        demoLink: 'https://dazzling-turing-9924b4.netlify.app/', 
        codeLink: 'https://github.com/ConstantineNam/paprika'
    },

    {   title: 'tetris', 
        description: 'Built with pure JavaScript code (no libraries), conveniently packed in a single file. Game board constructed with a two-dimensional array and used as coordinates to position DOM elements onto HTML. Enables keyboard, on-screen touch, and mouse click controls. Locally saves high-score across the sessions. Styled as a handheld console, and includes optional extra styling at the end of the file that can be removed without affecting gameplay.', 
        stack: [    {name: 'javascript', icon: <JsIcon/>}, 
                    {name: 'github pages', icon: null}
                ], 
        img: tetrisImg, 
        demoLink: 'https://constantinenam.github.io/tetris', 
        codeLink: 'https://github.com/ConstantineNam/tetris'
    },

    {   title: 'makeup artistry', 
        description: "Freelance project for a local business. Designed and delivered as a single page as per the client's request. Built with standard HTML, CSS, Node, Express JQuery stack. Includes a contact form that can be connected to FormSpree or a similar form submission service.", 
        stack: [    {name: 'html', icon: <HtmlIcon/>}, 
                    {name: 'css', icon: <CssIcon/>},
                    {name: 'jquery', icon: <JQueryIcon/>}, 
                    {name: 'node', icon: <NodeIcon/>}, 
                    {name: 'express', icon: null},
                    {name: 'github pages', icon: null}
                ], 
        img: artistryImg, 
        demoLink: 'https://constantinenam.github.io/makeup-artistry/', 
        codeLink: 'https://github.com/ConstantineNam/makeup-artistry'
    },

    {   title: 'shortcutt', 
        description: "URL shortener built with NodeJs, Express, cloud database MongoDB Atlas and EJS for front-end. Allows short link customization, and keeps the record of how many times each link got clicked.", 
        stack: [    {name: 'node', icon: <NodeIcon/>}, 
                    {name: 'mongodb', icon: <MongoIcon/>},
                    {name: 'express', icon: null},
                    {name: 'jsx', icon: null}
                ],
        img: shortcuttImg, 
        demoLink: null, 
        codeLink: 'https://github.com/ConstantineNam/shortcutt'
    },

    {   title: 'portfolio', 
        description: 'Portfolio website you are currently checking. Built with ❤️', 
        stack: [    {name: 'react', icon: <ReactIcon/>}, 
                    {name: 'firebase', icon: <FirebaseIcon/>}, 
                    {name: 'scss', icon: <SassIcon/>}, 
                    {name: 'netlify', icon: <NetlifyIcon/>}
                ],
        img: portfolioImg, 
        demoLink: null, 
        codeLink: 'https://github.com/ConstantineNam/portfolio'
    },

]

export default projectsData
