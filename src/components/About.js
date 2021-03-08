import React, { useState, useEffect} from 'react';
import NavSuggestion from './NavSuggestion.js'
// import resume from '../doc/resume.pdf'; resume is currently in maintenance
import photo from '../assets/images/photo.jpg';
import { ReactComponent as AestheticDark } from '../assets/icons/aesthetic-dark.svg';
import { ReactComponent as AccessibleDark } from '../assets/icons/accessible-dark.svg';
import { ReactComponent as FastDark } from '../assets/icons/fast-dark.svg';
import { ReactComponent as ResponsiveDark } from '../assets/icons/responsive-dark.svg';
import { ReactComponent as AestheticLight } from '../assets/icons/aesthetic-light.svg';
import { ReactComponent as AccessibleLight } from '../assets/icons/accessible-light.svg';
import { ReactComponent as FastLight } from '../assets/icons/fast-light.svg';
import { ReactComponent as ResponsiveLight } from '../assets/icons/responsive-light.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import { ReactComponent as FirebaseIcon } from '../assets/icons/firebase.svg';
import { ReactComponent as NodeIcon } from '../assets/icons/nodejs.svg';
import { ReactComponent as CssIcon } from '../assets/icons/css.svg';
import { ReactComponent as HtmlIcon } from '../assets/icons/html.svg';
import { ReactComponent as BootstrapIcon } from '../assets/icons/bootstrap.svg';
import { ReactComponent as FlutterIcon } from '../assets/icons/flutter.svg';
import { ReactComponent as GitIcon } from '../assets/icons/git.svg';
import { ReactComponent as MongoIcon } from '../assets/icons/mongodb.svg';
import { ReactComponent as HerokuIcon } from '../assets/icons/heroku.svg';
import { ReactComponent as JQueryIcon } from '../assets/icons/jquery.svg';
import { ReactComponent as JsIcon } from '../assets/icons/js.svg';
import { ReactComponent as SassIcon } from '../assets/icons/sass.svg';
import { ReactComponent as NetlifyIcon } from '../assets/icons/netlify.svg'

const About = () => {

    const [themeRef, setThemeRef] = useState(true)

    useEffect(()=> {
        let bodyClassesRef = document.body.classList
        let lightTheme = bodyClassesRef.contains('light')
        let darkTheme = bodyClassesRef.contains('dark')

        if (lightTheme) {
            setThemeRef(true)
        } else if (darkTheme) {
            setThemeRef(false)
        }
    },[])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className='about-hero'>
                <img src={photo} alt='author_photo' className='about-hero__photo'/>

                <div className='about-hero__bio'>

                    <h2>I’m Constantine, a Web Developer based in Toronto. 
                        And I love making things work!
                    </h2>

                    <h5>Since the time I've deployed my first <b>Hello World</b>, 
                        I got forever hooked on coding. 
                        <br/><br/>
                        From there my life path has been accompanied by several bootcamps, 
                        countless YouTube tutorials, documentations, and Stack Overflow browsings. 
                        <br/><br/>
                        Being an openminded and adaptable person, every project (either solo or collaborative) 
                        <a target='_blank' 
                           rel='noreferrer'
                           href='https://www.pinterest.ca/pin/697283954807187192/'><b> sparks joy </b></a> 
                           in me, and keeps me exciting from the step of research to deployment and eternal bug fixes
                           (improvements).
                        <br/><br/>
                        Apart from coding, you'll find me playing board games, increasing my body mass with bubble 
                        tea, and teaching my cat to fetch (surprisingly it works).
                    </h5>

                    {/* ------resume is currently in maintenance------ */}

                    {/* <div className='about-hero__download-cv'>
                        <h5>Straight to the dry facts?</h5>
                        <a download
                           className='btn-outline' 
                           href={resume} >
                           download my cv
                        </a>
                    </div> */}

                </div>

            </section>

            <section className='about-skills'>
                <h2>My apps strive to be</h2>
                <div className='about-skills__features'>

                    <div className='about-skills__feature'>
                        <span>
                            <div className='svg-wrapper'>
                                {themeRef ? <ResponsiveDark/> : <ResponsiveLight/> }
                            </div>
                            <h3>responsive</h3>
                            <h5>making apps look and function great on any screen size</h5>
                        </span>
                    </div>

                    <div className='about-skills__feature'>
                        <span>
                            <div className='svg-wrapper'>
                                {themeRef ? <FastDark /> : <FastLight/> }
                            </div>
                            <h3>fast</h3>
                            <h5>aiming for the shortest loading times</h5>
                        </span>
                    </div>

                    <div className='about-skills__feature'>
                        <span>
                            <div className='svg-wrapper'>
                                {themeRef ? <AccessibleDark/> : <AccessibleLight/>}
                            </div>
                            <h3>accessible</h3>
                            <h5>designing apps to deliver same experience for every visitor</h5>
                        </span>
                    </div>
                  
                    <div className='about-skills__feature'>
                        <span>
                            <div className='svg-wrapper'>
                                {themeRef ? <AestheticDark/> : <AestheticLight/> }
                            </div>
                            <h3>aesthetic</h3>
                            <h5>improving UI/UX design to catch the eye yet remain intuitive</h5>
                        </span>
                    </div>
                </div>

                <div className='about-skills__stack'>
                    <h2>Technical skills</h2>
                    <div className='about-skills__stack-list'>
                        <ReactIcon className='about-skills__stack-item'/>
                        <FirebaseIcon className='about-skills__stack-item'/>
                        <CssIcon className='about-skills__stack-item'/>
                        <HtmlIcon className='about-skills__stack-item'/>
                        <JsIcon className='about-skills__stack-item'/>
                        <BootstrapIcon className='about-skills__stack-item'/>
                        <FlutterIcon className='about-skills__stack-item'/>
                        <MongoIcon className='about-skills__stack-item'/>
                        <GitIcon className='about-skills__stack-item'/>
                        <NetlifyIcon className='about-skills__stack-item'/>
                        <NodeIcon className='about-skills__stack-item'/>
                        <HerokuIcon className='about-skills__stack-item'/>
                        <JQueryIcon className='about-skills__stack-item'/>
                        <SassIcon className='about-skills__stack-item'/>
                    </div>
                </div>

            </section>

            <section className='nav-suggestions__wrapper'>
                <NavSuggestion prev={'work'} next={'contact'}/>
            </section>

        
         </>
)}

export default About;
