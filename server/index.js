import express from 'express'
import cors from 'cors'
import { connectDB } from './config/mysql.js'
import dotenv from'dotenv'

import productrouter from './routes/productRoutes.js'

dotenv.config()

const PORT = process.env.PORT || 3000
connectDB()
const app= express()
app.use(express.json());
app.use(cors())
app.use('/api/product',productrouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

