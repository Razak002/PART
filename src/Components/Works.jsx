import React from 'react'
import wka from './assets/wka.png'
import wkb from './assets/wkb.png'
import wkc from './assets/wkc.png'
import wkd from './assets/wkd.png'
import wke from './assets/wke.png'
import wkf from './assets/wkf.png'

import './Styles/Works.css'

const Works = () => {
  return (
    <div className='works'>
      <div className="work_section">
    
  
       <div className="cards">
           <img src={wka} alt=''/>
           <button>see work</button>
       </div>

       <div className="cards">
           <img src={wkb} alt=''/>
           <button>see work</button>
       </div>
       
       
       <div className="cards">
           <img src={wkc} alt=''/>
           <button>see work</button>
       </div>
       
       
       <div className="cards">
           <img src={wkd} alt=''/>
           <button>see work</button>
       </div>
       
       <div className="cards">
           <img src={wke} alt=''/>
           <button>see work</button>
       </div>
       
       <div className="cards">
           <img src={wkf} alt=''/>
           <button>see work</button>
       </div>
       
</div>
   </div>
  
  )
}

export default Works