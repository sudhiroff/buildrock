"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Roles_1 = require("../../models/Roles");
exports.getRoles = (req, res) => {
    Roles_1.Role.find((err, result) => {
        res.send({
            "status": "success",
            "data": result
        });
    });
};
exports.getRole = (req, res) => {
    let body = { _id: req.params['id'] };
    Roles_1.Role.find(body, (err, result) => {
        res.send({
            "status": "success",
            "data": result
        });
    });
};
exports.createRole = (req, res) => {
    let role = new Roles_1.Role({
        roleName: req.body['roleName'],
        access: req.body['access']
    });
    role.save((err, result) => {
        res.send({
            "status": "success",
            "data": result
        });
    });
};
exports.updateRole = (req, res) => {
    let id = req.params['id'];
    let body = {
        roleName: req.body['roleName'],
        access: req.body['access']
    };
    Roles_1.Role.findByIdAndUpdate(id, body, (err, result) => {
        if (err) {
            res.send({
                "status": "failed",
                "msg": err
            });
        }
        res.send({
            "status": "success",
            "data": result
        });
    });
};
//# sourceMappingURL=role.js.map