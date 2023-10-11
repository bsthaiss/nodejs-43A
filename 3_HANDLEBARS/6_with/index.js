const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// Configurando o handlebars com o template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Rotas
app.get('/post', (req, res) => {
    
    const post = {
        title: "Aprender Node.js",
        category: "JavaScript",
        body: "Este artigo vai te ajudar a aprender Node.js",
        comments: 13
    }

    res.render('post', { post })
})

app.get('/dashboard', (req, res) => {
    const items = ['Azul', 'Amarelo', 'Vermelho']

    res.render('dashboard', { items })
})

app.get('/', (req, res) => {
    const usuario = {
        nome: "Thais",
        profissao: "Estagiária",
        idade: 19
    }

    const auth = true

    res.render('home', { usuario, auth })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})