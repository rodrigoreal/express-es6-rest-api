// Importing Node modules and initializing Express
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Server = require('socket.io');
const config = require('./config/main');
const routes = require('./routes/index');

const app = express();
const io = new Server();

// Log requests to API using morgan
app.use(morgan('dev'));

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, ' +
    'Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Handshake
io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', (data) => {
    console.log(data);
  });
});

io.listen(app.listen(config.server.port, () => {
  console.log(`Your server is running on port  ${config.server.port} .`);
}));

// Make io accessible to our router
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/', routes);
