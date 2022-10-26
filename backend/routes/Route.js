import express from "express";
import {
  getTransaction,
  getTransactionByID,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  totalTransaction,
  sumTransaction,
} from "../controllers/transactionController.js";

import {
  getUser,
  getUserByID, Register, Login, Logout
} from "../controllers/userController.js";

import {verifyToken} from "../middle/verifyToken.js";

import { refreshToken } from "../controllers/refreshToken.js";

const router = express.Router();

router.get("/transaction", getTransaction);
router.get("/transaction/:id", getTransactionByID);
router.post("/transaction", createTransaction);
router.patch("/transaction/:id", updateTransaction);
router.delete("/transaction/:id", deleteTransaction);
router.get("/total", totalTransaction);
router.get("/totalprice", sumTransaction);

router.get("/user", verifyToken, getUser);
router.get("/user/:id", getUserByID);
router.post("/user", Register);

router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout)

export default router;
