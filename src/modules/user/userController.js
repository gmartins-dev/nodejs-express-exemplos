import { Router } from 'express'
import { signup, login } from './userService'

//criando as rotas que serão usadas no projeto
const router = Router ()

const AUTH_COOKIE_NAME = 'authorization'

router.post('/signup', (req,res) => {
    try {
        const token = signup(req.body)
        res.cookie(AUTH_COOKIE_NAME, token).status(201).send()
    } catch (err) {
        if(err.message === 'email_existente')
            return res.status(400).send(err.message) //erro usuario bad request
        
        res.status(500).send(err.message) //erro desconhecido do servidor
    }
    
})

router.post('/login', (req,res) => {
    try{
        const token = login(req.body)
        res.cookie(AUTH_COOKIE_NAME, token).status(200).send()
    } catch (err) {
        if (err.message === 'email_not_found' || err.message === "incorect_password")
            return res.status(400).send(err.message)

        res.status(500).send()
    }
})

export default router

