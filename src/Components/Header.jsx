import { Close, MenuOpenOutlined, MenuOutlined } from '@material-ui/icons'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Styles from './Styles/Header.css'

const Header = () => {
    const [active,setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
  return (
    <div>
        <div className="header">
            <div className="header_logo">
                <h1>PROVIDER</h1>
            </div>
            <nav className={active ? 'navbar active' : 'navbar'}>
                <ul>
                    <div className='Closed'>
                        <Close className='Close' onClick={showMenu}/>
                        </div>
    
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    
                    <li>
                        <Link to='/'>Portfolio</Link>
                    </li>
                    
                    <li>
                        <Link to='/'>Blog</Link>
                    </li>
                    
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            
            <div className='changer'>
                <MenuOutlined className='menu' onClick={showMenu}/>

                </div>
        </div>

    </div>
  )
}

export default Header