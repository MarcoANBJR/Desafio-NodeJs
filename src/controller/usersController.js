import users from './../models/User.js';

export default class UserController {

    static listUsers = (req, res) => {
        users.find((err, user) => {
            user = user.map((user) => {
                const userPassword = {...user['_doc']};
                delete userPassword.password;
                return userPassword;
            })
            res.status(200).json(user)
        })
    }

    static userById = (req, res) => {
        const {id} = req.params;

        users.findById(id, (err, users) => {            
            err ?
                res.status(404).send({message: `${err.message} - id incorreto !`}) :
                res.status(200).send(users)
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

    static putUser = (req, res) => {
        const {id} = req.params;

        users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(404).send({message})
            } else {
                res.status(200).send({message: 'Usuário cadastrado !'})
            }
            // err ? 
            //     res.status(500).send({message}) : 
            //     res.status(200).send({message: 'Usuário cadastrado !'})
        })
    }
    
    static deleteUser = (req, res) => {
        const {id} = req.params;

        users.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(404).send({message: err.message})
            } else {
                res.status(204).send({message: 'Usuário removido !'})
            }
            // err ? 
            //     res.status(500).send({message: err.message}) :
            //     res.status(200).send({message: 'Usuário removido !'})
        })
    }
}