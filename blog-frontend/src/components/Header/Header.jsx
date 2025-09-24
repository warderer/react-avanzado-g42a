import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', path: '/' },
    { id: 'newpost', label: 'Escribir', path: '/newpost' },
    { id: 'contacto', label: 'Contacto', path: '/contact' }
  ]

  return (
    <header className='header'>
      <div className='header-container'>

        <div className='header-left'>
          <div className='logo'>
            <span className='logo-text'>Blog de César Guerra</span>
          </div>
          <nav className='nav-menu'>
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className='header-right'>
          <NavLink to='/login' className='nav-item'> Iniciar sesión</NavLink>
          <NavLink to='/register' className='nav-item'> Registrarse</NavLink>
          <span
            className='nav-item'
            onClick={() => {
            // Aquí va la lógica para cerrar sesión
              console.log('Haz cerrado la sesión')
            }}
          > Cerrar sesión
          </span>
          <div className='user-profile'>
            <span className='user-greeting'>Hola, Usuario</span>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
