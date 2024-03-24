import { NavLink } from "react-router-dom" 
import { icons } from "../../assets/icons/Icons"


const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul>

        <NavLink to='/'> {icons.home}Home</NavLink>
        <NavLink to='/calculator'> {icons.calculator} Calculator</NavLink>
        <NavLink to='/mileage'> {icons.mileage} Mileage</NavLink>
        <NavLink to='/contacts'> {icons.contacts}Contacts</NavLink>
        <NavLink to='/music'> {icons.music}Music</NavLink>
        

      </ul>
    </nav>
  )
}

export default NavBar
