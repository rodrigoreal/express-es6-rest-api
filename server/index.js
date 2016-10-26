// Importing Node modules and initializing Express
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/main';
import routes from './routes/index';

const app = express();

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

app.use('/', routes);

// Start the server
app.listen(config.server.port, () => {
  console.log(`Your server is running on port  ${config.server.port} .`);
});
