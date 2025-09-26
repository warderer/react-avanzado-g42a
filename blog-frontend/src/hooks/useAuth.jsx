import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

// 3. Crear un custom hook para usar el contexto (opcional)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext debe ser usado dentro de un AuthProvider')
  }
  return context
}
