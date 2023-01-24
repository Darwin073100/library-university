const express = require('express');
const { config } = require('./config/config');
const { logErrors, errorHandler , boomErrorHandler, ormErrorHandler} = require('./middlewares/err.handler');
const routerApi = require('./routes');

const port = config.port;
const app = express();

app.use(express.json());

app.get('/',(request, response)=>{
  response.send('Hello');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, ()=>{
  console.log('My Port: localhost:' + port);
});
