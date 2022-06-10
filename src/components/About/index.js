import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import {Loader} from 'react-loaders'


const About = ()=> {
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>

                <h1>
                    <AnimatedLetters 
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm very ambitious front-end developer looking for a role in established IT company with the oppoptunity to work with the latest technology on challenging and diverse projects.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and prepetually working on imporving my chops one design problem at a time.
                </p>
                <p>
                    If I need define myself in one sentence that would be a tech-obsessed, self-confident, motivated person.
                </p>

            </div>


            <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color='#ec4d28'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faBootstrap} color='#0275d8'/>
                        </div>

                    </div>
                 
            </div>

        </div>
        <Loader type= 'pacman' />
        </>
    )
}

export default About;