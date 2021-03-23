import React from 'react'
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg'
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg'

const Footer = () => {
    return (
        <footer>
            <h4>Find me on</h4>
            <div className='soc-media'>
                <a href='https://www.linkedin.com/in/c-nam/' target='_blank' rel='noreferrer'><LinkedInIcon/></a>
                <a href='https://github.com/ConstantineNam' target='_blank' rel='noreferrer'><GithubIcon/></a>  
            </div>
            <p>{(new Date().getFullYear())}</p>
            <p>Designed and developed by me &copy; Constantine Nam</p>
        </footer>
)}

export default Footer;
