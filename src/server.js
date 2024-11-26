import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import router from './router.js';

const app = express();
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

dotenv.config();
const port = process.env.PORT

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

app.use(router)

