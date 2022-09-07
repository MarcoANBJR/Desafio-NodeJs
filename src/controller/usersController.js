import users from './../models/User.js';

export default class UserController {

    static listUsers = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users)
        })
    }

    static postUser = (req, res) => {
        let user = new users(req.body);

        user.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - erro ao cadastrar o usuário !`})
            } else {
                res.status(201).send(user.toJSON())
            }
        })
    }
    
}