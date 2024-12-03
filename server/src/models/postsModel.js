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

export async function updatePostModel(id, newPost) {
    const collection = await getDbCollection()
    const objectId = ObjectId.createFromHexString(id)
    return collection.updateOne({_id: new ObjectId(objectId)}, {$set: newPost})
}

export async function getFileModel(id) {
    const collection = await getDbCollection()
    const objectId = ObjectId.createFromHexString(id)
    const object = await collection.findOne({_id: new ObjectId(objectId)})

    return object.imgUrl
}

