import express from "express"
import customerRoutes from "./routes/customer.routes"
import morgan from "morgan"
import productRoutes from "./routes/product.routes"

const app = express()

// Middleware
app.use(express.json())
app.use(morgan("dev"))

// Routes
app.use("/customers", customerRoutes)
app.use("/products", productRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
