import express from 'express'
import {GetPosts} from './controllers/posts.js'

const router = express()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/posts', GetPosts)

export default router