const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
// Adicionei o Cors, pois estava tendo problemas com o acesso à API
app.use(cors());
app.use(express.json());
app.use(express.static('/test/jobs'));

// Aqui é onde o site estático é acessado
app.use('/', (_req, res) => {
  res.sendFile(path.join(__dirname + '/test/jobs/index-test.html'));
});

const server = http.createServer(app);
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
