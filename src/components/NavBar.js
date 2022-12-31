import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>

      <div>
          <Link className='logo' to="/"><span className='me'>Me</span><span className='xc'>xC</span><span className='al'>al</span></Link>
      </div>

      
        <div>
            <Link to="/category/1"><span className='ruta'>Comidas</span></Link>
        </div>
      
        <div>
          <Link to="/category/2"><span className='ruta'>Bebidas</span></Link>
        </div>
      
        <div >
          <Link to="category/3"><span className='ruta'>Salsas</span></Link>
        </div>
        
   
        
    
  
      <CartWidget />

    
      
    </nav>
  )
}

export default Navbar