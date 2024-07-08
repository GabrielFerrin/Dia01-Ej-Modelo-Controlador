import express from 'express'
import userRoutes from './routes/usuarios.routes.js'
import { PORT } from './config.js'

const app = express()

app.use(express.json())

app.use('/api/usuarios', userRoutes)

app.listen(3000, () =>
  console.log(`Server running on http://localhost:${PORT}`))