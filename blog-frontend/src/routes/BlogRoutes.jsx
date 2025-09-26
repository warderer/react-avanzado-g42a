import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import NewPost from '../pages/NewPost/NewPost'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import { useAuthContext } from '../hooks/useAuth'

const BlogRoutes = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/newpost'
        element={isAuth ? <NewPost /> : <Navigate to='/login' replace />}
      />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}
export default BlogRoutes
