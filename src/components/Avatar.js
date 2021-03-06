import React, { useEffect, useState }  from 'react';
import avatar  from '../assets/images/avatar.svg';
import avatarHead  from '../assets/images/avatar-head.svg';
import avatarEyes from '../assets/images/avatar-eyes.svg';
import avatarEyebrows  from '../assets/images/avatar-eyebrows.svg';
import avatarNose  from '../assets/images/avatar-nose.svg';
import { useSpring, animated } from 'react-spring'

const trans1 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`
const trans2 = (x, y) => `translate3d(${x / 35}px,${y / 35}px,0)`
const trans3 = (x, y) => `translate3d(${x / 30}px,${y / 40}px,0)`
const trans4 = (x, y) => `translate3d(${x / 35}px,${y / 35}px,0)`
const trans5 = (x, y) => `translate3d(${x / 30}px,${y / 40}px,0)`



const Avatar = (props) => {

    useEffect(()=> {
        if (props.hoveredOnLink) {
            setStyle({top: '-5%'});
            setActive(true)
        } else {
            setStyle({top: '1%'});
            setActive(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props])
    
    const mouthOpen = 'M144.5,212.7c-0.3,7-13.5,12.7-24.2,12.7c-10.6,0-23.9-5.6-24.2-12.7c-0.3-7.1,12.7-10.6,24.2-10.7C131.8,202,144.8,205.5,144.5,212.7z'
    const mouthClose = 'M144.5,212.7c-0.7,1-9.1,12.7-24.2,12.7c-1.3,0-15.6-0.3-24.2-12.7c8,0.1,16.1,0.1,24.2,0.1C128.4,212.8,136.5,212.7,144.5,212.7z'

    const [active, setActive] = useState(false);
    const { x } = useSpring({ x: active ? mouthOpen : mouthClose });
    const [{top, height}, setStyle] = useSpring(()=> ({top: '1%', height: '10%'}))

    return (  
        <div className='avatar'>
            <svg viewBox='0 0 350 350'>
                <circle className='avatar__background'cx='175' cy='175' r='175'/>
            </svg>
            <img src={avatar} className='avatar__static'/>
            <animated.img src={avatarHead} className='avatar__head' style={{ transform: props.animProps.xy.interpolate(trans1) }} />
            <animated.img 
                src={avatarEyes} className='avatar__eyes' 
                style={{ transform: props.animProps.xy.interpolate(trans2), height }} />
            <animated.img src={avatarEyebrows} className='avatar__eyebrows' style={{transform: props.animProps.xy.interpolate(trans3), top }} />
            <animated.img src={avatarNose} className='avatar__nose'  style={{ transform: props.animProps.xy.interpolate(trans4)}} />
            <animated.svg className='avatar__mouth' style={{transform: props.animProps.xy.interpolate(trans5), background: 'new 0 0 273.4 293.4'}} >
                <animated.path style={{fill: '#F87A6F'}} d={x} />
            </animated.svg>
        </div>
  )
}

export default Avatar;
