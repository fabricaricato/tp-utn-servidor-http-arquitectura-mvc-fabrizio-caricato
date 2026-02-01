import { connectDb } from "./config/mongodb.js"
import express from "express"
import cors from "cors"
import { config } from "dotenv"
import { getUsers, createUser, deleteUser, updateUser } from "./controllers/user.controller.js"
config()

const PORT = process.env.PORT

// CONFIGURACIÓN DEL SERVIDOR
const servidor = express()
servidor.use(express.json())
servidor.use(cors())

// ENDPOINTS
servidor.use("/api/auth", )
servidor.use("/api/tasks", )

// CONEXIÓN Y ESCUCHA DEL PUERTO
servidor.listen(PORT, () => {
  connectDb()
  console.log(`=== 👂 Escuchando en el puerto: ${PORT} 👂 ===`)
})