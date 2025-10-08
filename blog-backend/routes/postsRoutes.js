import { Router } from 'express'
import { getAllPosts, getPostById, createOnePost, updateOnePost } from '../controllers/postController.js'

const router = Router()

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.post('/', createOnePost)
router.patch('/:id', updateOnePost)

export default router
