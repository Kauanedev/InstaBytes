import dotenv from 'dotenv';
import connectToDatabase from '../config/database.js'
import {ObjectId} from 'mongodb';

dotenv.config();

async function getDbCollection() {
    const conexao = await connectToDatabase(process.env.MONGO_DB)
    const db = conexao.db("imersao-instabytes")
    const collection = db.collection("posts")

    return collection
}

export async function getPostsFromDb() {
    const collection = await getDbCollection()
    return await collection.find().toArray()
}

export async function createPostModel(newPost) {
    const collection = await getDbCollection()
    return collection.insertOne(newPost)
}
