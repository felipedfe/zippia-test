const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('/test/jobs'));

app.use('/', (_req, res) => {
  res.sendFile(path.join(__dirname + '/test/jobs/index-test.html'));
});

const server = http.createServer(app);
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
