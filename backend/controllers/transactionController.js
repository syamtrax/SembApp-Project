import Transaction from "../models/transactionModel.js";
import { Op } from "sequelize";
import { response } from "express";

export const getTransaction = async(req, res) =>{
    try {
        const response = await Transaction.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTransactionByID = async(req, res) =>{
    try {
        const response = await Transaction.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTransaction = async(req, res) =>{
    try {
        await Transaction.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTransaction = async(req, res) =>{
    try {
        await Transaction.update(req.body,{
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTransaction = async(req, res) =>{
    try {
        await Transaction.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const totalTransaction = async(req, res) =>{
    try {
        const Total = await Transaction.count({
            where:{
                id:{
                    [Op.gt]:1
                }
            }
        })
        res.status(200).json(Total);
    } catch (error) {
        console.log(error.message);
    }
}


