import express from 'express'
import multer from 'multer'
import {createNewPost, getPosts, ulploadImg, updatePost} from './controllers/posts.js'
import cors from 'cors'

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
    res.send(`
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; margin-top: 5rem;">
         <h1>InstaLike API</h1>
        <p>Access the github project here: <a href="https://github.com/Kauanedev/InstaBytes">GitHub</a></p>
        <p>Add "/posts" to your route to access the api posts</p>
    </div>
        `)
})

router.get('/posts', getPosts)
router.post('/posts', createNewPost)
router.post('/upload', upload.single("file"), ulploadImg)
router.put('/upload/:id', updatePost)
export default router