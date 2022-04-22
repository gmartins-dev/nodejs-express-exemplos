import { Router } from 'express'

//criando as rotas que serão usadas no projeto
const router = Router ()

router.post('/signup', (req,res) => {
    res.send('SIGNUP ./')
})

router.post('/login', (req,res) => {
    res.send('LOGIN ./')
})

export default router