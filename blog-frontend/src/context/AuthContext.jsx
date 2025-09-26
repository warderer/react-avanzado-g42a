// 1. Crear el contexto
import { createContext } from 'react'

const AuthContext = createContext()

// 2. Crear el componente del proveedor del contexto (provider)

function AuthProvider ({ children }) {
  // Aqui van los datos que quiero compartir de forma global
  const data = {

  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
