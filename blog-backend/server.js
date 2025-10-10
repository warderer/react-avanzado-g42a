// #1 Importar Express
import express from 'express'
import cors from 'cors'
import postsRoutes from './routes/postsRoutes.js'
import connectDB from './config/db.js'

// #2a Crear una instancia de Express
const app = express()
const port = process.env.PORT || 3000

// #2b Configurar express para que entienda JSON
app.use(express.json())

// #2c Configurar express para recibir datos de formularios
app.use(express.urlencoded({ extended: true }))

// #2d Configurar CORS para permitir solicitudes desde el frontend
app.use(cors())

// #3 Definir rutas

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({
    message: 'API del Blog 🌍',
    endpoints: {
      getPosts: 'GET /api/v1/posts',
      getPost: 'GET /api/v1/posts/:id',
      createPost: 'POST /api/v1/posts',
      updatePost: 'PATCH /api/v1/posts/:id',
      deletePost: 'DELETE /api/v1/posts/:id'
    }
  })
})

app.use('/api/v1/posts', postsRoutes)

/* Manejo de Errores 404 */
app.use((req, res) => {
  res.status(404).json({
    message: 'Endpoint no encontrado',
    error: `La ruta ${req.originalUrl} no existe en el servidor`
  })
})

// Conectar a la base de datos
connectDB()

// #4 Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port} 🚀`)
})
