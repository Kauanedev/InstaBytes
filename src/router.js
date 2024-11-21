import express from 'express'
import {getPostById, GetPosts} from './controllers/posts.js'

const router = express()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/posts', GetPosts)
router.get('/posts/:id', getPostById)

export default router