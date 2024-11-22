import dotenv from 'dotenv';
import express from 'express';
import router from './router.js';

dotenv.config();
const port = process.env.PORT

const app = express()

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

app.use(router)

