import express from 'express'
import {createNewPost, getPosts} from './controllers/posts.js'

const router = express()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/posts', getPosts)
router.post('/posts', createNewPost)

export default router