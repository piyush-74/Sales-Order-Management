import express from "express"
import { authRouter } from "./auth.router.js"

export const router = express.Router()

router.use("/auth", authRouter)
