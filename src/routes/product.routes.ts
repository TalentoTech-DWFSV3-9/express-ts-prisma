import { Router } from "express"
import * as productController from "../controllers/product.controller"

const router = Router()

router.get("/", productController.getAllProducts)
router.post("/", productController.createProduct)
router.get("/:id", productController.getProductById)
router.put("/:id", productController.updateProductById)
router.delete("/:id", productController.deleteProductById)


export default router
