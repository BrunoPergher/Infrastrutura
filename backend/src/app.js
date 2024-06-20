// Importações
const express = require('express');
const bodyParser = require('body-parser');

// Configuração
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
