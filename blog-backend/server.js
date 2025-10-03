// #1 Importar Express
import express from 'express'

// #2a Crear una instancia de Express
const app = express()
const port = process.env.PORT || 3000

// #2b Configurar express para que entienda JSON
app.use(express.json())

// #3 Definir rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// #4 Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port} 🚀`)
})
