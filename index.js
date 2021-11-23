const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("O servidor está funcionando");
})

app.listen(8081, () => {
  console.log("Servidor iniciado em: http://localhost:8081/");
})
