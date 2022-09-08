import express from "express";
import UserController from './../controller/usersController.js';

const router = express.Router();
const path = '/api/v1/user/';

router
    .get(`${path}`, UserController.listUsers)
    .get(`${path}search`, UserController.userByName)
    .get(`${path}:id`, UserController.userById)
    .post(`${path}`, UserController.postUser)
    .put(`${path}:id`, UserController.putUser)
    .delete(`${path}:id`, UserController.deleteUser)

    export default router;