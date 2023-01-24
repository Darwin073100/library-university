const express = require('express');
const cors = require('cors');
const { config } = require('./config/config');
const { logErrors, errorHandler , boomErrorHandler, ormErrorHandler} = require('./middlewares/err.handler');
const routerApi = require('./routes');

const port = config.port;
const app = express();

app.use(express.json());

const whitelist = ['https://localhost:8080', 'https://example.com'];
const options = {
  origin: (origin, callback)=>{
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('No permitido'));
    }
  }
};

app.use(cors(options));

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
