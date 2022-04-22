import * as express from 'express' //importando o projeto
const app = express() //chamando a função
app.use(express.json())

import userController from './modules/user/userController'
import postController from './modules/post/postController'

//importando/adicionando as rotas ao index.js
app.use('/user', userController)
app.use('/post', postController)


app.listen(3000, () => console.log('OK NODE IS RUNNING AT --> http://localhost:3000/'))