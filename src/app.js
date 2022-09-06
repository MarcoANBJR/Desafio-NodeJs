import express from "express";

const app = express();

app.use(express.json())

const user = [
    {
        id : 1 ,
        " name " : " João Silva " ,
        " cpf " : " 908.415.400-20 " ,
        " birthDate " : " 01/01/2000 " ,
        " email " : " joao.silva@compasso.com " ,
        " address " : " street A " ,
        " number " : " A25 " ,
        " complement " : " house " ,
        " city " : " São Paulo " ,
        " state " : " SP " ,
        " country " : " Brasil " ,
        " zipCode " : " 93950-000 "
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Back-End/NodeJs')
})

app.get('/api/v1/user', (req, res) => {
    res.status(200).json(user)
})

app.get('/api/v1/user/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.status(200).json(user[index]);
})

app.post('/api/v1/user', (req, res) => {
    user.push(req.body);
    res.status(201).send('Usuário cadastrado !')
})

app.put('/api/v1/user/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    user[index].titulo = req.body.titulo;
    res.status(200).json(user);
})

app.delete('/api/v1/user/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    user.splice(index, 1);
    res.status(200).send('Usuário removido !');
})

function buscaLivro(id) {
    return user.findIndex(livro => livro.id == id)
}

export default app;