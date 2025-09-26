import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import BlogRoutes from './routes/BlogRoutes'
import Header from './components/Header/Header'
import './App.css'

function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <div className='app'>
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
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
