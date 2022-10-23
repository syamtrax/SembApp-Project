import express from "express";
import cors from "cors";
import TransactionRoute from "./routes/transactionRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(TransactionRoute);



app.listen(5000, ()=> console.log('Server up and running...'));