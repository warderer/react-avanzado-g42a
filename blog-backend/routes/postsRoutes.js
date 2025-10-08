import { Router } from 'express'
import { getAllPosts, getPostById, createOnePost, updateOnePost, deleteOnePost } from '../controllers/postController.js'

const router = Router()

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.post('/', createOnePost)
router.patch('/:id', updateOnePost)
router.delete('/:id', deleteOnePost)

export default router
