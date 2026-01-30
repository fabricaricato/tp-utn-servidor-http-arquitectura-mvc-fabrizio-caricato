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
servidor.get("/users", getUsers)
servidor.post("/users", createUser)
servidor.patch("/users/:id", updateUser)
servidor.delete("/users/:id", deleteUser)

// CONEXIÓN Y ESCUCHA DEL PUERTO
servidor.listen(PORT, () => {
  connectDb()
  console.log(`=== 👂 Escuchando en el puerto: ${PORT} 👂 ===`)
})