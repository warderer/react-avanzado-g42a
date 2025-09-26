// 1. Crear el contexto
import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

// 2. Crear el componente del proveedor del contexto (provider)

function AuthProvider ({ children }) {
  // Lógica de Autenticación
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
  const [userPayload, setUserPayload] = useState(null) // Datos del usuario autenticado

  const login = (data) => {
    localStorage.setItem('userData', JSON.stringify(data))
    setUserPayload(data)
    setIsAuth(true)
  }

  const logout = () => {
    localStorage.removeItem('userData')
    setUserPayload(null)
    setIsAuth(false)
  }

  useEffect(() => {
    // Al cargar la app, verificar si hay datos de usuario en el localStorage
    const data = localStorage.getItem('userData')
    if (data) {
      // Si hay datos, convertilos a Objeto de JS y actualizar el estado
      const parsedData = JSON.parse(data)
      setUserPayload(parsedData)
      setIsAuth(true)
    }
  }, [])

  // Aqui van los datos que quiero compartir de forma global
  const data = {
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext value={data}>
      {children}
    </AuthContext>
  )
}

export { AuthContext, AuthProvider }
