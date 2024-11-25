import express from 'express'
import multer from 'multer'
import {createNewPost, getPosts, ulploadImg, updatePost} from './controllers/posts.js'
import * as cors from 'cors'

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

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
router.use(express.json())
router.use(cors(corsOptions))

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/posts', getPosts)
router.post('/posts', createNewPost)
router.post('/upload', upload.single("file"), ulploadImg)
router.put('/upload/:id', updatePost)
export default router