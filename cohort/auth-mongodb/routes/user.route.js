import express from "express";
import {
  check,
  login,
  logout,
  register,
  verify,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.get("/verify/:token", verify);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.get("/check", authMiddleware, check);

export default router;
