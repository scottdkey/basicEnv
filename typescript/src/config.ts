import dotenv from "dotenv"

dotenv.config()

const {PORT} = process.env

export const getConfig = () => {
  return {
    port: PORT ? parseInt(PORT) : 3000
  }
}