import {getPostsFromDb} from '../models/postsModel.js'

export async function getPosts(req, res) {
    try {
        const posts = await getPostsFromDb()

        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({error: error})
    }
}

