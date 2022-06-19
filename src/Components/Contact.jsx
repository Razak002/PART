import { Link } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import './Styles/Contact.css'

function Contact () {
    return(
    <div className="contact">
        <Link to='/'>
            <ArrowBack className='arrow'/>
            </Link>
            <div className="input">
                <h1>contact us</h1>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Message' className='message'/>
                <button>send</button>
            </div>
    </div>
    )
}











export default Contact
