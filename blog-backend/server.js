// #1 Importar Express
import express from 'express'
import postsData from './data/posts.json' with { type: 'json' }
import cors from 'cors'

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

// app.get('/api/v1/posts', (req, res) => {
//   res.json(postsData)
// })

/* PARAMS */
// Un PARAM sirve para hacer una ruta dinámica. Por ejemplo, si quiero traer la información de un post en específico, puedo hacer que una ruta sea dinámica y reciba el ID del post que quiero traer.
app.get('/api/v1/posts/:postId', (req, res) => {
  // console.log(req.params)
  const { postId } = req.params // Desestructuración de objetos
  console.log(`Recibí una petición GET en la ruta /api/v1/posts/${postId}`)

  const post = postsData.find((post) => post.id === Number(postId))

  if (post) {
    res.json(post)
  } else {
    res.status(404).json({ message: `Post con ID ${postId} no encontrado` })
  }
})

/* QUERY */
// Una QUERY es similar a un PARAM, pero en lugar de ser parte de la ruta, va después de un signo de interrogación (?) y puede tener múltiples pares clave-valor separados por el símbolo &. Por ejemplo, si quiero filtrar posts por autor o categoría, puedo usar queries.
// Las queries son opcionales, mientras que los params son obligatorios.
// Las queries son abiertas, es decir, no necesito especificarlas en la ruta en el backend, mientras que los params sí. El usuario puede mandar cualquier query que quiera, es responsabilidad del backend recibir solo los datos que le interesan.
// Ejemplo de Query: /api/v1/posts?userId=5&title=ut&body=aliquid

app.get('/api/v1/posts', (req, res) => {
  console.log(req.query)
  const { userId, title, body } = req.query

  let filteredPost = postsData

  if (userId) {
    filteredPost = filteredPost.filter((post) => post.userId === Number(userId))
  }
  if (title) {
    filteredPost = filteredPost.filter((post) => post.title.toLowerCase().includes(title.toLowerCase()))
  }
  if (body) {
    filteredPost = filteredPost.filter((post) => post.body.toLowerCase().includes(body.toLowerCase()))
  }

  res.json(filteredPost)
})

// #4 Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port} 🚀`)
})
