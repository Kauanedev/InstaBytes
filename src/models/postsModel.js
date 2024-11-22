import dotenv from 'dotenv';
import connectToDatabase from '../config/database.js'

dotenv.config();

const conexao = await connectToDatabase(process.env.MONGO_DB)

export async function getPostsFromDb() {
    const db = conexao.db("imersao-instabytes")
    const collection = db.collection("posts")

    return await collection.find().toArray()
}