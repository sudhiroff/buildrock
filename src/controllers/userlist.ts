import { Response, Request, NextFunction } from "express";
import { UserDocument, User } from "../models/User";

export const getUserList = (req: Request, res: Response) => {
    User.find((err, result) => {
        if (err) { res.send(err); }
        res.send({
            status: "success",
            data: result
        });
    });
};

export const findOne = (req: Request, res: Response) => {
    let query = { _id: req.params['id'] || '' };
    User.findOne(query, (err, result) => {
        if (err) { res.send(err); }
        res.send({
            status: "success",
            data: result
        });
    });
};

export const updateUser = (req: Request, res: Response) => {
    console.log("Update-user--:" + req.params['id']);
    let query = { _id: req.params['id'] || '' };
    let body = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNo: req.body.mobileNo,
        role: req.body.role
    }
    User.findOneAndUpdate(query, body, (err, result) => {
        if (err) { res.send(err); }
        res.send({
            status: "success",
            data: result
        });
    });
};