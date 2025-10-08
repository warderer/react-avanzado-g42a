import { Router } from 'express'
import { getAllPosts, getPostById, createOnePost } from '../controllers/postController.js'

const router = Router()

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.post('/', createOnePost)

export default router
