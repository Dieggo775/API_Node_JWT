import 'dotenv/config'
import express from 'express'
import { PrismaClient } from '@prisma/client'
import publicRoutes from './routes/public.js'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use('/', publicRoutes(prisma))

app.listen(3000, () => console.log('Server running on port 3000'))
