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
export const getPosts = () => {

}

export const getPost = (id) => {

}

// UPDATE
export const updatePost = (id, postDataToUpdate) => {

}

// DELETE
export const deletePost = (id) => {

}
