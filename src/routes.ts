
import express from "express";
import { getUserList, findOne, updateUser } from "./controllers/userlist";
import { getRoles, createRole, getRole, updateRole } from "./controllers/config/role";

export const routes = (() => {
    const router = express.Router();
    router.get('/config/userlist', getUserList);
    router.get('/config/userlist/:id', findOne);
    router.put('/config/userlist/:id', updateUser);

    router.get('/config/roles', getRoles);
    router.post('/config/roles', createRole);
    router.get('/config/roles/:id', getRole);
    router.put('/config/roles/:id', updateRole);

    return router;
})();