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

  if (loading) return <div className='loading-state'>Cargando posts...</div>
  if (error) return <div className='error-state'>Error: {error}</div>

  return (
    <div className='home-container'>
      <header className='home-header'>
        <h1 className='home-title'>Blog de Publicaciones</h1>
        <p className='home-subtitle'>Enterate de lo último que acontece en el mundo de la programación</p>
      </header>

      <div className='posts-container'>
        {posts.map(post => (
          <article key={post.id} className='post-card'>
            <div className='post-image-container'>
              <img
                src={getRandomImageUrl(post.id)}
                alt={`Imagen para ${post.title}`}
                className='post-image'
                loading='lazy'
              />
            </div>
            <div className='post-content'>
              <h2 className='post-title'>{post.title}</h2>
              <p className='post-excerpt'>
                {post.body.length > 100
                  ? `${post.body.substring(0, 100)}...`
                  : post.body}
              </p>
              <div className='post-meta'>
                <span>Publicación #{post.id}</span>
                <a href={`/post/${post.id}`} className='read-more'>
                  Leer más
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
export default Home
