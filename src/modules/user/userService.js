import { sign } from 'jsonwebtoken'

let users = []

const generateAcessToken = (data) => sign(data, 'secret')

//função para verificar se o email já existe
const getUserByEmail = (searchEmail) =>
    users.find((obj) =>     
        obj.email === searchEmail)


export const signup = (data) => {
    if (getUserByEmail(data.email)) throw new Error('email_existente')
        
    users.push(data)
    return generateAcessToken({ email: data.email })

    return true
}

export const login = (data) => {
    const user = getUserByEmail(data.email)

    if(!user) throw new Error('email_not_found')

    if (user.password !== data.password) throw new Error('incorect_password')

    return generateAcessToken({ email: data.email })
}