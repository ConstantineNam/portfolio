import React from 'react';
import projectsData from '../data/projectsData'

const Projects = () => {

    return (
        <>
            {projectsData.map((proj, key) => 
                <div key={key} className='project'>
                    <div className='project__content'>
                    
                        <h2 className='project__title'>{proj.title}</h2>

                        <p className='project__summary'>{proj.description}</p>
                        
                        <div className='project__btns'>
                            {proj.demoLink ?
                                <a  target='_blank' 
                                    rel='noreferrer'
                                    href={proj.demoLink} 
                                    className='btn-outline'>
                                    demo 
                                </a> : 
                                null
                            }
                            
                            <a  target='_blank'
                                rel='noreferrer'
                                href={proj.codeLink} 
                                className='btn-outline'>
                                code
                            </a> 
                        </div>

                        <div className='project__stack'>
                            {proj.stack.map((x, key) => 
                                <span key={key}><p>{x.name}</p>{x.icon}</span>
                            )}
                        </div>
                   
                    </div>  

                    <img src={proj.img} alt='project_screenshot' className='project__image'/>
            
                </div>
            )}
        </>
    )
  }

export default Projects