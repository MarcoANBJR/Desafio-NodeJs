import express from "express";
import UserController from './../controller/usersController.js';

const router = express.Router();

router
    .get('/api/v1/user', UserController.listUsers)
    .get('/api/v1/user/:id', UserController.userById)
    .post('/api/v1/user', UserController.postUser)
    .put('/api/v1/user/:id', UserController.putUser)
    .delete('/api/v1/user/:id', UserController.deleteUser)

    export default router;