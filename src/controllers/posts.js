import fs from 'fs'
import {createPostModel, getFileModel, getPostsFromDb, updatePostModel} from '../models/postsModel.js'

export async function getPosts(req, res) {
    try {
        const posts = await getPostsFromDb()

        return res.status(200).json(posts)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error: "Não foi possível buscar os posts."})
    }
}

export async function createNewPost(req, res) {
    try {
        const newPost = req.body
        const post = await createPostModel(newPost)

        return res.status(201).json(post)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error: "Não foi possível criar o post."})
    }
}

export async function ulploadImg(req, res) {
    try {
        const {descricao, alt} = req.body
        const newPost = {
            descricao,
            imgUrl: req.file.originalname,
            alt
        }
        const post = await createPostModel(newPost)

        const fileType = req.file.mimetype.split("/")[1]
        const updateImg = `uploads/${post.insertedId}.${fileType}`
        fs.renameSync(req.file.path, updateImg)
        console.log(`Arquivo salvo em: ${updateImg}`);

        return res.status(201).json(post)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error: "Não foi possível criar o post."})
    }
}
