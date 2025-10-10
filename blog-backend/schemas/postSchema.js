import mongoose from 'mongoose'

// Definir el esquema del post
const postSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  title: { type: String, required: true, trim: true },
  body: { type: String, required: true },
  imageUrl: { type: String, required: true }
}, { timestamps: true }) // createdAt y updatedAt automáticos

export default postSchema
