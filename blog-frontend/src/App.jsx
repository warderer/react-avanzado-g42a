import { BrowserRouter } from 'react-router-dom'
import BlogRoutes from './routes/BlogRoutes'
import './App.css'

function App () {
  return (
    <div className='app'>
      <BrowserRouter>
        <main className='app-main'>
          <div className='container'>
            <BlogRoutes />
          </div>
        </main>

        <footer className='app-footer'>
          <div className='container'>
            <p>© 2025 Blog de César Guerra. Todos los derechos reservados.</p>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
