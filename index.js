const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//config handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get("/", (req, res) => {
  res.render('home');
})

app.listen(8081, () => {
  console.log("Servidor iniciado em: http://localhost:8081/");
})
