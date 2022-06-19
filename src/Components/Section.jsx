import React from 'react'
import './Styles/Section.css'
import wht from './assets/wht.jpg'

const section = () => {
  return (
       <div className="section">
    <div className="section_container">

    <div className="section_img">
        <img src={wht} alt=''/>
    </div>
    <div className="section_content">
        <h1>Who is Zakson</h1>
        <p>Javascript Developer</p>
        <p>React Js Developer</p>
        <p>front End Developer</p>
        <p>Member MCI cooding Team</p>

    </div>

   </div>
   </div>



  )
}

export default section