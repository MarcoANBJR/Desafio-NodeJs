import users from './../models/User.js';

export default class UserController {

    static listUsers = (req, res) => {
        users.find((err, users) => {
            users = users.map((users) => {
                const usersPassword = {...users['_doc']};
                delete usersPassword.password;
                return usersPassword;
            })
            
            const {page} = req.query;
            const {limit} = req.query;

            const startIndex = (page - 1) * limit;
            const endIndex =page * limit;

            const resultUser = users.slice(startIndex, endIndex)

            res.status(200).json(resultUser)
        })
    }

    static userById = (req, res) => {
        const {id} = req.params;

        users.findById(id, (err, users) => {  
            const userPassword = {...users['_doc']};
            delete userPassword.password;
                    
            err ?
                res.status(404).send({message: `${err.message} - id incorreto !`}) :
                res.status(200).send(userPassword)
        })
    }

    static userByName = (req, res) => {
        const {name} = req.query;
        users.find({'name': {$regex: name}}, {}, (err, users) => {
            users = users.map((user) => {
                const usersPassword = {...user['_doc']};
                delete usersPassword.password;
                return usersPassword;
            })
            err ?
                res.status(404).send('Usuário não encontrado!') :
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