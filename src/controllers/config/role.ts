import { Response, Request } from "express";
import { Role } from '../../models/Roles'
import { result } from "lodash";

export const getRoles = (req: Request, res: Response) => {
    Role.find((err, result) => {
        res.send({
            "status": "success",
            "data": result
        });
    });
}

export const getRole = (req: Request, res: Response) => {
    let body = { _id: req.params['id'] }
    Role.find(body, (err, result) => {
        res.send({
            "status": "success",
            "data": result
        });
    });
}

export const createRole = (req: Request, res: Response) => {
    let role = new Role({
        roleName: req.body['roleName'],
        access: req.body['access']
    })
    role.save((err, result) => {
        res.send({
            "status": "success",
            "data": result
        });
    });
}


export const updateRole = (req: Request, res: Response) => {
    let id = req.params['id'];
    let body = {
        roleName: req.body['roleName'],
        access: req.body['access']
    }
    Role.findByIdAndUpdate(id, body, (err, result) => {
        if (err) {
            res.send({
                "status": "failed",
                "msg": err
            })
        }
        res.send({
            "status": "success",
            "data": result
        });
    });
}