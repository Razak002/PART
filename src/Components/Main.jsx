import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import pj from './assets/pj.png'
import './Styles/Main.css'

function main (){
  return (
    <>
        <div className="main">
            <div className="main_container">
              <div className="main_content">
   <div className="text">
                 <p>Hey There</p>
                 <h1>I am zakson</h1>
                 <p>Fullstack web dev</p>


        <div className='icons'>
                 <Facebook className='icons'/>
                   <Instagram className='icons'/>
                   <LinkedIn className='icons'/>
                   <Pinterest className='icons'/>
                   <Twitter className='icons'/>
                   </div>



      <div className="button">
                  <button>see my works</button>
                  <button>hire me</button>
                
                   </div>
          </div>
             </div>
             <div className="main_img">
               <img src={pj} alt=''/>
             </div>





            </div>
        </div>

    </>
  )
}

export default main