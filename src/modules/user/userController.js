import { Router } from 'express'
import { signup } from './userService'

//criando as rotas que serão usadas no projeto
const router = Router ()

router.post('/signup', (req,res) => {
    try {
        const answer = signup(req.body)
        res.send(answer)
    } catch (err) {
        if(err.message === 'email_existente')
            return res.status(400).send(err.message) //erro usuario bad request
        
        res.status(500).send(err.message) //erro desconhecido do servidor
    }
    
})

router.post('/login', (req,res) => {
    res.send('LOGIN ./')
})

export default router

