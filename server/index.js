import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import dalleRoutes from "./routes/dalle.routes.js"

dotenv.config()

const port = process.env.PORT ?? 8080
const app = express()
app.use(cors())
app.use(express.json({ limit: "50mb" }))

app.use("/api/v1/dalle", dalleRoutes)

app.get("/", (_, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
