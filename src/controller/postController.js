import { Router } from 'express'

//criando as rotas que serão usadas no projeto
const router = Router ()

router.post('/', (req,res) => {
    res.send('CREATE POST ./')
})

router.post('/:id?', (req,res) => {
    //DUAS OPCOES: 1) listas todos posts e 2) listar/filtrar apenas um post especifico
    res.send('GET POST ./')
})

export default router