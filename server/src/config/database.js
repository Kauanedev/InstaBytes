import {MongoClient} from 'mongodb';

export default async function connectToDatabase(connectionString) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(connectionString);
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');

        return mongoClient;
    } catch (error) {
        console.error('Failed to connect to the database!', error);
        process.exit();
    }
}
