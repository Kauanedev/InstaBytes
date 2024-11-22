import express from 'express'
import {getPosts} from './controllers/posts.js'

const router = express()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/posts', getPosts)

export default router