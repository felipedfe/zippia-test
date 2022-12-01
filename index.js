const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
// Adicionei o Cors, pois estava tendo problemas com o acesso à API
app.use(cors());
app.use(express.json());

// Aqui é onde o site estático é acessado
const baseDir = `${__dirname}/jobs-page/build/`
app.use(express.static(`${baseDir}`))
app.get('/test/jobs', (req, res) => res.sendFile('index.html' , { root : baseDir } ))

const server = http.createServer(app);
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
