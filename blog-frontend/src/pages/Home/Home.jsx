import { useState, useEffect } from 'react'
import './home.css'

const getRandomImageUrl = (postId) => {
  const ImageId = 100 + postId
  return `https://picsum.photos/id/${ImageId}/600/400`
}

const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Traemos los posts de la API de jsonplaceholder
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
          throw new Error('Error al obtener los posts')
        }
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <h1>Home</h1>
  )
}
export default Home
