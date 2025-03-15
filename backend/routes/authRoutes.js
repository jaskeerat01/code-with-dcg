import express from "express";
import {
  registerUser,
  verifyOtp,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser); // User registration & OTP send
router.post("/verify-otp", verifyOtp); // Verify OTP & activate account
router.post("/login", loginUser); // User login
router.post("/logout", logoutUser); // Logout user

export default router;
