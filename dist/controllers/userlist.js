"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
exports.getUserList = (req, res) => {
    User_1.User.find((err, result) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: "success",
            data: result
        });
    });
};
exports.findOne = (req, res) => {
    let query = { _id: req.params['id'] || '' };
    User_1.User.findOne(query, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: "success",
            data: result
        });
    });
};
exports.updateUser = (req, res) => {
    console.log("Update-user--:" + req.params['id']);
    let query = { _id: req.params['id'] || '' };
    let body = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNo: req.body.mobileNo,
        role: req.body.role
    };
    User_1.User.findOneAndUpdate(query, body, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: "success",
            data: result
        });
    });
};
//# sourceMappingURL=userlist.js.map