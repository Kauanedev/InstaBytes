import connectToDatabase from '../config/database.js'
import posts from '../postsDb.js'
import dotenv from 'dotenv';

dotenv.config();

const conexao = await connectToDatabase(process.env.MONGO_DB)

export async function getPostsFromDb() {
    const db = conexao.db("imersao-instabytes")
    const collection = db.collection("posts")

    return await collection.find().toArray()
}

export async function GetPosts(req, res) {
    try {
        const posts = await getPostsFromDb()

        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({error: error})
    }
}

function findPostById(id) {
    return posts.findIndex(post => post.id === Number(id))
}

export async function getPostById(req, res) {
    try {
        const {id} = req.params
        const postId = findPostById(id)

        return res.status(200).json(posts[postId])

    } catch (error) {
        return res.status(500).json({error: error})
    }
}