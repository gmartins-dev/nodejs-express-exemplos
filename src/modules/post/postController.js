import { Router } from 'express'
import { verifyAcessToken } from '../../utils/auth'

//criando as rotas que serão usadas no projeto
const router = Router ()

router.post('/', verifyAcessToken, (req,res) => {
    res.send('CREATE POST ./')
})

router.post('/:id?', verifyAcessToken, (req,res) => {
    //DUAS OPCOES: 1) listas todos posts e 2) listar/filtrar apenas um post especifico
    res.send('GET POST ./')
})

export default router