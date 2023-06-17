import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080

const config = {
  port: PORT,
}

export default config