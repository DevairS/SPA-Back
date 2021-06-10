const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const connection = require('./database');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

connection.authenticate().then(console.log).catch(console.error);

connection.sync({ force: true });

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
