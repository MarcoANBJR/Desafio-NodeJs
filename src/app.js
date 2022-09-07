import express from "express";
import db from './config/dbConnect.js';
import routes from './routers/index.js';

db.on('error', console.log.bind(console, 'Erro de conexão !'))
db.once('open', () => {
    console.log('Conexão estabelecida !');
})

const app = express();
app.use(express.json())
routes(app);

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

export default app;