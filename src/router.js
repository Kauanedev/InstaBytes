import express from 'express'
import {FindPost, GetPosts} from './controllers/posts.js'

const router = express()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/posts', GetPosts)
router.get('/posts/:id', FindPost)

export default router