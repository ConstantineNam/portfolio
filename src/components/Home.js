import React, { useEffect, useState} from 'react';
import Projects from './Projects'
import Avatar from './Avatar.js'
import NavSuggestion from './NavSuggestion.js'
import { ReactComponent as ArrowDown } from '../assets/icons/arrow-down.svg';
import { useSpring, animated } from 'react-spring'

const Home = (props) => {

    const handleScrollToWork = () => {
        let element = document.getElementById('work');
        
        // header's height
        let yOffset = -75; 

        let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
    }

    const [hoveredOnLink, setHoveredOnLink] = useState(false)


    useEffect(()=> {
        document.body.addEventListener('mousemove', ({ clientX: x, clientY: y }) => setAnimProps({ xy: calc(x, y) }))

        for (let i = 0; i<6; i++ ) {
            document.getElementsByClassName('triggerFacialExpression')[i].addEventListener('mouseenter', (()=>setHoveredOnLink(true)))
            document.getElementsByClassName('triggerFacialExpression')[i].addEventListener('mouseleave', (()=>setHoveredOnLink(false)))
        }
        
        let scrollToWork = props.location.state
        if (scrollToWork && scrollToWork.scrollToWork) {
            handleScrollToWork()
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
    const [animProps, setAnimProps] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    const fadeIn = useSpring({config: { duration: 300 }, opacity: 1, transform: 'translateY(0)', from: {opacity: 0, transform: 'translateY(2.5vh)'}})

    const fadeInDelayed = useSpring({config: { duration: 300 }, opacity: 1, transform: 'translateY(0)', from: {opacity: 0, transform: 'translateY(2.5vh)'}, delay: 300})

    const [{ backgroundPosition, backgroundSize }, set] = useSpring(() => ({ backgroundPosition: '50% 50%', backgroundSize: '100% 100%'}));

    return (
        <>
            <section className='home' >
                <animated.div className='home__hero' style={fadeIn}>
                    <div>
                        <h1>Hi.</h1>
                        <h5>I'm Constantine, 
                        <span> a web developer </span> 
                        <br/>
                        located in Toronto
                        </h5>
                    </div>
                    <Avatar animProps={animProps} hoveredOnLink={hoveredOnLink}/>
                </animated.div>
          
                <animated.button  style={fadeInDelayed} onMouseEnter={() => set({ backgroundPosition: '0 0', backgroundSize: '300% 300%'})}
                        onMouseLeave={() => set({ backgroundPosition: '50% 50%', backgroundSize: '100% 100%'})} className='home__view_work_link triggerFacialExpression' onClick={()=>{handleScrollToWork()}}>
                    <p>view my work</p>
                    <animated.div 
                        className='btn-round'
                        style={{ backgroundPosition, backgroundSize }}
                        ><ArrowDown/></animated.div>
                </animated.button>
            </section>

        
            <section id='work' className='work'>
                <div className='work__grid'>
                    <Projects/>
                </div>
            </section>

            <section className='nav-suggestions__wrapper'>
                <NavSuggestion next={'about'} />
            </section>


            
        </>
)}

export default Home;
