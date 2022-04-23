.md = mark down
projeto feito usando a arquitetura modular

# Passos para rodar o projeto: 

- Instalar todas dependencias com `npm i`

- Instalar o webpack globalmente com `npm i -g webpack@5.68.0`

- Instalar demais dependencias `npm i webpack@5.68.0 webpack-cli@4.9.2 nodemon-webpack-plugin@4.7.0 webpack-node-externals@3.0.0 --save-dev`

- Rodar localmente usando `npm run dev`


=======================================

Documentação do protocolo HTTP:

https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status



//para verificar se há algum erro
try {} catch (errror) {res.status(500).send(error.message)}


//utilização de tokens para dar segurança a autenticação
JWT -> Json Web Tokens (site: jwt.io)
Token = Json + Chave Secreta
libs : JWT + Cookie Parser
npm i jsonwebtoken@8.5.1 cookie-parser@1.4.6

