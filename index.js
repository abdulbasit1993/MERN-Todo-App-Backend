import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todosRoutes from './routes/todos.js';

const app = express();

dotenv.config();

app.use(express.json({extended: true}));

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use('/todos', todosRoutes)

const mongoURL = process.env.DB_URL;

app.get('/', (req, res) => {
    res.send('Welcome to Todos App server!')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) console.log('Error in server setup...')
    else console.log(`Server is running on port ${PORT}`)
})

mongoose.connect(mongoURL)
.then(() => console.log(
    'Connected to database successfully!'
))
.catch(err => console.log(err));