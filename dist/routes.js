"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userlist_1 = require("./controllers/userlist");
const role_1 = require("./controllers/config/role");
exports.routes = (() => {
    const router = express_1.default.Router();
    router.get('/config/userlist', userlist_1.getUserList);
    router.get('/config/userlist/:id', userlist_1.findOne);
    router.put('/config/userlist/:id', userlist_1.updateUser);
    router.get('/config/roles', role_1.getRoles);
    router.post('/config/roles', role_1.createRole);
    router.get('/config/roles/:id', role_1.getRole);
    router.put('/config/roles/:id', role_1.updateRole);
    return router;
})();
//# sourceMappingURL=routes.js.map