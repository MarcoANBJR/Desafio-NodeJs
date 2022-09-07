import express from "express";
import UserController from './../controller/usersController.js';

const router = express.Router();

router
    .get('/api/v1/user', UserController.listUsers)
    .post('/api/v1/user', UserController.postUser)

    export default router;