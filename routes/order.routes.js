const orderController = require("../controllers/order.controllers")
const express = require("express")

const router = express.Router()

router.get("/order",orderController.getOrder)
router.post("/createOrder",orderController.createOrder)
router.get("/order/:id", orderController.getOrderById)
module.exports = router