import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={({ isActive }) => isActive ? s.active_link : ''}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.active_link : ''}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/users" className={({ isActive }) => isActive ? s.active_link : ''}>Users</NavLink>
      </div>
      <div>
        <NavLink to="/news" className={({ isActive }) => isActive ? s.active_link : ''}>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={({ isActive }) => isActive ? s.active_link : ''}>Music</NavLink>
      </div>
      <div>
      <NavLink to="/settings" className={({ isActive }) => isActive ? s.active_link : ''}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;