import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config() // Carga las variables de entorno desde el archivo .env

const { MONGODB_URI } = process.env
// const MONGODB_URI = process.env.MONGODB_URI

// Función para conectar a la base de datos
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Conexión a MongoDB exitosa')
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error)
    process.exit(1) // Salir del proceso con un código de error
  }
}

export default connectDB
