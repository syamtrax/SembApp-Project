import express from "express";
import { getTransaction, getTransactionByID, createTransaction, updateTransaction, deleteTransaction, totalTransaction,sumTransaction } from "../controllers/transactionController.js";

const router = express.Router();

router.get('/transaction', getTransaction);
router.get('/transaction/:id', getTransactionByID);
router.post('/transaction', createTransaction);
router.patch('/transaction/:id', updateTransaction);
router.delete('/transaction/:id', deleteTransaction);
router.get('/total',totalTransaction); 
router.get('/totalprice',sumTransaction);


export default router;