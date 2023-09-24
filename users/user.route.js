const express = require("express")
const controller = require("./user.controller")


const userRouter = express.Router()

userRouter.get("/", controller.getUsers)
userRouter.post("/signup", middleware.validateUser, controller.createUser)
userRouter.post("/login", middleware.validateUser, controller.createUser)


module.exports = userRouter