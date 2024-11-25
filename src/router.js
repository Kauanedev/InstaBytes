import express from 'express'
import multer from 'multer'
import {createNewPost, getPosts, ulploadImg, updatePost} from './controllers/posts.js'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    dest: "./uploads", storage
})
const router = express()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/posts', getPosts)
router.post('/posts', createNewPost)
router.post('/upload', upload.single("file"), ulploadImg)
router.put('/upload/:id', updatePost)
export default router