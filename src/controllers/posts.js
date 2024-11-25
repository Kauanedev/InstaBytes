import {createPost, getPostsFromDb} from '../models/postsModel.js'

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
        const post = await createPost(newPost)

        return res.status(201).json(post)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error: "Não foi possível criar o post."})
    }
}

