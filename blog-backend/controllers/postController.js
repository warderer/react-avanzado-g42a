import { getPost, getPosts } from '../models/Posts.js'

// CREATE

// READ
export const getAllPosts = async (req, res) => {
  try {
    const posts = await getPosts()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los posts', error: error.message })
  }
}

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params
    const post = await getPost(id)
    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' })
    }
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el post', error: error.message })
  }
}

// UPDATE

// DELETE
