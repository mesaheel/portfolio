import {useState} from 'react';
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import {Loader} from 'react-loaders'


const Home = () => {

    const [letterClass, setLetterClass] =  useState('text-animate');
    const nameArray = ['a', 'h', 'i', 'l']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']


return (
<>
    <div className='container home-page'>
    <div className='text-zone'>
<h1>
    <span className={letterClass}>H</span>
    <span className={`${letterClass}_12`}>i,</span>
 <br/>
 <span className={`${letterClass}_13`}>i</span>
 <span className={`${letterClass}_14`}>'m</span>
<img src={LogoTitle} alt="Developer"/>

<AnimatedLetters letterClass={letterClass}
strArray = {nameArray}
idx={15}
 />
<br/>
<AnimatedLetters letterClass={letterClass}
strArray = {jobArray}
idx={22}
/>
</h1>

<h2>Frontend Developer / JavaScript Expert</h2>

<Link to={'/contact'} className='flat-botton'>CONTACT ME</Link>

    </div>
    <Logo />

    </div>

<Loader type= 'pacman' />

    </>
)

}

export default Home;