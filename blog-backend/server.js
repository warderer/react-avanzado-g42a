// #1 Importar Express
import express from 'express'
import postsData from './data/posts.json' with { type: 'json' }

// #2a Crear una instancia de Express
const app = express()
const port = process.env.PORT || 3000

// #2b Configurar express para que entienda JSON
app.use(express.json())

// #3 Definir rutas
app.get('/', (req, res) => {
  res.send('Hola Alumnos, G42A 😉')
})

app.get('/api/v1/posts', (req, res) => {
  res.json(postsData)
})

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

// #4 Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port} 🚀`)
})
