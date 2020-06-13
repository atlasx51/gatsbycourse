import React from 'react'
import {Link} from 'gatsby'
// import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <div>
      <header className={headerStyles.header}>
         <h1>
           <Link className={headerStyles.title} to='/'>
           Test Blog 
           </Link>
         </h1>
         <nav>
           <ul>
             <li>
             <Link className={headerStyles.link} to='/'>Home</Link>  
             </li>
             <li>
             <Link className={headerStyles.link} to='/about'>About</Link>  
             </li>
             <li>
             <Link className={headerStyles.link} to='/blog'>Blog</Link>  
             </li>
             <li>
             <Link className={headerStyles.link} to='/contact'>Contact</Link>  
             </li>
           </ul>
         </nav>
       

      </header>
      </div>
  )
}

export default Header