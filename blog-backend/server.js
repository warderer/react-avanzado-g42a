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

// #4 Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port} 🚀`)
})
