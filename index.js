const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Postagem = require('./models/Post');


//config handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Body Parser
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json());

// Conexão com db
(async () => {
    const db = require('./models/db');
    try {
        const connection = await db.sync();
    } catch (error) {
        console.log("Houve um erro" + error);
    }
})();


app.get("/", async (req, res) => {
  const posts = await Postagem.findAll();
  res.render('home', { posts });
});

app.get('/cadastrar', (req, res) => {
  res.render('form');
})

app.get('/deletar/:id', async (req, res) => {
  await Postagem.destroy({ where: { id: req.params.id}});
  res.redirect('/');
})

app.post('/enviado', async (req, res) => {
  const post = await Postagem.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  });

  console.log(post)

  res.redirect('/');
})

app.listen(8081, () => {
  console.log("Servidor iniciado em: http://localhost:8081/");
})
