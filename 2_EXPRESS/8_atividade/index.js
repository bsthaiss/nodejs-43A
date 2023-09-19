const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(publicPath))

app.use(express.static('public'))

app.get('/cadastrar', (req, res) => {
    res.sendFile(path.join(templatesPath, 'index.html'))
})

app.post('/cadastrar', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    console.log(`
        Usuário: ${nome}
        E-mail: ${email}
        Senha: ${senha}
    `);

    res.redirect('/');
})

app.get('/premio', (req, res) => {
    res.sendFile(path.join(templatesPath, 'premio.html'));
})

app.listen(5000)