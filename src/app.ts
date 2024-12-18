import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
export const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(cookieParser())

app.get('/', (_req, res) => {
  res.send('Hello World!')
})
