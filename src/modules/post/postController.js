import { Router } from 'express'
import { verifyAcessToken } from '../../utils/auth'
import { createPost, getPosts } from './postService'

//criando as rotas que serão usadas no projeto
const router = Router ()

router.post('/', verifyAcessToken, (req,res) => {
    try{
        const post = createPost(req.body, req.user)
        res.status(200).send(post)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.post('/:id?', verifyAcessToken, (req,res) => {
    
    try {
        const posts = getPosts(req.params.id)
        res.status(200).send(posts)
    } catch(err){
        if (err.message === 'post_not_exist')
            return res.status(400).send(err.message)

        res.status(500).send(err.message)
    }
    
    //DUAS OPCOES: 1) listas todos posts e 2) listar/filtrar apenas um post especifico
    res.send('GET POST ./')
})

export default router