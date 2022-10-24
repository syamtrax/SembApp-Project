import express from "express";
import { getTransaction, getTransactionByID, createTransaction, updateTransaction, deleteTransaction, totalTransaction,sumTransaction } from "../controllers/transactionController.js";
import { createUser, getUser, getUserByID } from "../controllers/userController.js";

const router = express.Router();

router.get('/transaction', getTransaction);
router.get('/transaction/:id', getTransactionByID);
router.post('/transaction', createTransaction);
router.patch('/transaction/:id', updateTransaction);
router.delete('/transaction/:id', deleteTransaction);
router.get('/total',totalTransaction); 
router.get('/totalprice',sumTransaction);

router.get('/user', getUser);
router.get('/user/:id', getUserByID);
router.post('/user', createUser);


export default router;