import {Link, NavLink} from 'react-router-dom';
import Logo from '../Images/th.jpg';
import './Navbar.css';
import { links } from '../data';
import {GoThreeBars} from 'react-icons/go'



const Navbar = () => {
 return(
    <nav>
        <div className="container nav-container">
            <Link to='/' className='logo'>
                <img src={Logo} alt='Nav-logo'></img>
            </Link>

            <ul className='nav-links'>
                {
                    links.map(({name, path}, index) => {
                        return(
                            <li>
                               <NavLink to={path}  className={({isActive}) => isActive ? 'active-nav':''}>{name}</NavLink>
                            </li>
                        )
                    })
                } 
            </ul>
            
            <button className='nav_toggle-btn'>
                <GoThreeBars/> 
            </button>

        </div>

    </nav>
 )
}

export default Navbar;