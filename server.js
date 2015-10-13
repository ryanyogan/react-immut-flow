import express from 'express';
import fs from 'fs';
import http from 'http';
import logger from 'morgan';
import errorHandler from 'errorhandler';
import path from 'path';
import favicon from 'serve-favicon';

let app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/orders.json', (req, res) => {
  res.sendFile(__dirname + '/data/orders.json');
});

app.get('/sales_stats.json', (req, res) => {
  res.sendFile(__dirname + '/data/sales_stats.json');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

if ('development' == app.get('env')) {
  app.use(errorHandler());
}

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Server is listening on port: ${app.get('port')}`);
});
