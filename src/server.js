import dotenv from 'dotenv';
import express from 'express';
import router from './router.js';
import conectarAoBanco from './config/database.js';

dotenv.config();
const port = process.env.PORT

const app = express()

await conectarAoBanco(process.env.MONGO_DB)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

app.use(router)

