// Datos iniciales en Memoria
import postsData from '../data/posts.json' with { type: 'json' }

// CREATE

// READ
export const getPosts = () => {
    return postsData
}

export const getPost = (id) => {
    return postsData.find(post => post.id === parseInt(id))
}

// UPDATE

// DELETE