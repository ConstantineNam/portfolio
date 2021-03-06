import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/icons/moon.svg';


const Navbar = () => {
    const triggerFacialExpression = useRef('triggerFacialExpression');

    const [theme, setTheme] = useState(true)
    
    useEffect(() => {
        //toggling dark/light theme, with dark theme being default 
        let darkTheme = theme ? 'dark' : 'light' 
        let lightTheme = theme ? 'light' : 'dark' 

        document.body.classList.remove(lightTheme);
        document.body.classList.add(darkTheme);
    },[theme])

    const scrollToWorkIfHomePage = () => {
        let element = document.getElementById('work');
        let yOffset = -75; 
        
        if (element) {
            let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        } 
    }

    return (

        <header>
           
            <Link    
                to={{
                        pathname: '/',
                        state: {
                            scrollToWork: false
                        }
                    }} 
                className=' nav-link triggerFacialExpression'
                onClick={()=>{window.scrollTo(0, 0)}}>
                <span className='logo'>const</span>
            </Link>
            
            <nav>

                <Link    
                    to={{
                        pathname: '/',
                        state: {
                            scrollToWork: true
                        }
                    }} 
                    ref={triggerFacialExpression}
                    className='nav-link triggerFacialExpression'
                    onClick={()=>scrollToWorkIfHomePage()}>
                    work
                </Link>

                <NavLink    
                    to='/about' 
                    className='nav-link triggerFacialExpression'
                    activeClassName='nav-link__active'>
                    about
                </NavLink>

                <NavLink    
                    to='/contact' 
                    className='nav-link triggerFacialExpression'
                    activeClassName='nav-link__active'>
                    contact
                </NavLink>

            </nav>
            
            <button 
                onClick={()=> setTheme(!theme)}
                className='btn btn-theme triggerFacialExpression'>
                {theme ? <SunIcon /> : <MoonIcon />}
            </button>

        
        </header>

    )
}

export default Navbar;
