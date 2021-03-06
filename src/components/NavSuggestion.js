import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const NavSuggestion = (props) => {

    //boolean to render scroll-to-top button when on home page
    const [scrollToTopLink, setScrollToTopLink] = useState(false)

    //boolean to scroll to work
    const [scrollToWorkLink, setScrollToWorkLink] = useState(false)

    //scrolls page to top
    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(()=> {
        if(!props.prev ) {
            setScrollToTopLink(true)
        }
        if(props.prev === 'work') {
            setScrollToWorkLink(true)
        }
    },[])

    let prev = props.prev
    let next = props.next
    let prevLink = '/' + prev
    let nextLink = '/' + next

    return (
        <div className='nav-suggestions'>
            <div className='nav-suggestions__prev'>
                <h3>prev</h3>
                {scrollToTopLink ? 
                <h1 style={{cursor: 'pointer'}} onClick={()=>handleScrollToTop()}>home</h1>
                : 
                <Link    
                    to={{
                        pathname: scrollToWorkLink ? '/' : prevLink,
                        state: {
                            scrollToWork: scrollToWorkLink ? true : false
                        }
                    }} 
                    className=''
                    >
                    <h1>{prev}</h1>
                </Link>
                }
                
            </div>
            <div className='nav-suggestions__next'>
                <h3>next</h3>
                <Link    
                    to={next ? nextLink : '/'} 
                    className=''>
                    <h1>{next ? next : 'home'}</h1>
                </Link>
            </div>
    </div>
)}

export default NavSuggestion;
