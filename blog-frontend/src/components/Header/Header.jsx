import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuth'
import './header.css'

const Header = () => {
  const { userPayload, isAuth, logout } = useAuthContext()

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
          {isAuth
            ? (
              <span
                className='nav-item'
                onClick={logout}
              > Cerrar sesión
              </span>
              )
            : (
              <>
                <NavLink to='/login' className='nav-item'> Iniciar sesión</NavLink>
                <NavLink to='/register' className='nav-item'> Registrarse</NavLink>
              </>
              )}

          <div className='user-profile'>
            <span className='user-greeting'>Hola, {
              userPayload ? userPayload.name : 'Invitado'
              }
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
