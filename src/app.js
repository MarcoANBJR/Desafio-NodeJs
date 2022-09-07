import express from "express";
import db from './config/dbConnect.js';
import users from './models/User.js';

db.on('error', console.log.bind(console, 'Erro de conexão !'))
db.once('open', () => {
    console.log('Conexão estabelecida !');
})

const app = express();

app.use(express.json())

// const users = [
//     {
//         id : 1 ,
//         " name " : " João Silva " ,
//         " cpf " : " 908.415.400-20 " ,
//         " birthDate " : " 01/01/2000 " ,
//         " email " : " joao.silva@compasso.com " ,
//         " address " : " street A " ,
//         " number " : " A25 " ,
//         " complement " : " house " ,
//         " city " : " São Paulo " ,
//         " state " : " SP " ,
//         " country " : " Brasil " ,
//         " zipCode " : " 93950-000 "
//     }
// ]

app.get('/', (req, res) => {
    res.status(200).send('Back-End/NodeJs')
})

app.get('/api/v1/user', (req, res) => {
    users.find((err, users) => {
        res.status(200).json(users)
    })
})

app.get('/api/v1/user/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.status(200).json(users[index]);
})

app.post('/api/v1/user', (req, res) => {
    users.push(req.body);
    res.status(201).send('Usuário cadastrado !')
})

app.put('/api/v1/user/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    users[index].titulo = req.body.titulo;
    res.status(200).json(users);
})

app.delete('/api/v1/user/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    users.splice(index, 1);
    res.status(200).send('Usuário removido !');
})

function buscaLivro(id) {
    return users.findIndex(livro => livro.id == id)
}

export default app;