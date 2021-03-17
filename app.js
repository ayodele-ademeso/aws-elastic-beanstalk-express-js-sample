const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi again, still building a codepipeline and making it stick'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
