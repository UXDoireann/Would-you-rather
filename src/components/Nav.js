
import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav(){



return(
    <nav className = 'nav'>
    <ul className = 'nav_list'>
    <li>
 <NavLink to = "/home" exact activeClassName="active" >
        Home
    </NavLink>
    </li>
        <li>
            <NavLink to ="/" exact activeClassName="active" >
                Login
            </NavLink>
            </li>
          
    

    </ul>
    </nav>




)

    
}


