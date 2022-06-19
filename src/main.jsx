import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>,

  </React.StrictMode>
)
