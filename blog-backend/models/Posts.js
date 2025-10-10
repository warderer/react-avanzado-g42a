import mongoose from 'mongoose'
import postSchema from '../schemas/postSchema.js'

// Creo el modelo a partir del esquema
const Post = mongoose.model('Post', postSchema)

// CREATE
export const createPost = async (postData) => {
  console.log('Creating post with data:', postData)
  try {
    const newPost = new Post({
      userId: postData.userId,
      title: postData.title,
      body: postData.body,
      imageUrl: postData.imageUrl,
      ...postData
    })
    return await newPost.save()
  } catch (error) {
    console.error('Error creating post:', error)
    throw error
  }
}

// READ
export const getPosts = async () => {
  return await Post.find().sort({ createdAt: -1 }) // Ordenar por fecha de creación descendente
}

export const getPost = async (id) => {
  return await Post.findById(id)
}

// UPDATE
export const updatePost = async (id, postDataToUpdate) => {
  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { $set: postDataToUpdate }, // Usar $set para actualizar solo los campos proporcionados
    { new: true }) // Devuelve el documento actualizado
  return updatedPost
}

// DELETE
export const deletePost = async (id) => {

}
