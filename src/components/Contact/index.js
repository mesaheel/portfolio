import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import {useRef} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const Contact = () => {

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_gymgc19','template_11dpnko', refForm.current, 'qxB4G7NSmiROLJnBZ'
           )
        .then(
            () => {
                alert('Message Successfully Sent!')
                window.location.reload(false)
            },
            () =>{
                alert('Failed to send the message, please try again')
            }
        )
    }
    return (
        <>
    <div className='container contact-page'>

        <div className='text-zone'>

            <h1>
                <AnimatedLetters 
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}
                 />
             </h1>
             <p>
                 I am intrested in full time job opportunities or freelance. However, if you have other request or questions, feel free to contact me using below form either.
             </p>

             <div className='contact-form'>
             <form ref={refForm} onSubmit={sendEmail}>

             <ul>
                 <li className='half'>
                 <input type="text" name="name" placeholder="Name" required/>

                 </li>
                 <li className='half'>
                 <input type="email" name="email" placeholder="E-mail" required/>

                 </li>

                 <li>
                 <input placeholder="Subject" type="text" name='subject' required/>


                 </li>

                 <li>
                 <textarea name="message" placeholder='Message' required />


                 </li>

                 <li>
                     <input type="submit" className='flat-button' value="SEND"/>
                 </li>



             </ul>

             </form>


             </div>


        </div>

<div className='info-map'>
Sahil Ali
<br />
India
<br/>
West Bengal
<br />
Kolkata
<br/>
<span>mesahil.sa@gmail.com</span>
</div>
<div className='map-wrap'>
<MapContainer center={[23.035408, 88.418825]} zoom={13}>
<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
<Marker position={[23.035408, 88.418825]}>
<Popup>Sahil lives here, come over for a cup of coffee :)</Popup>

</Marker>

</MapContainer>
</div>

    </div>

        <Loader type='pacman' />



        </>
    )
}

export default Contact;