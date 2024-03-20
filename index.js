const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require("helmet");

const app = express();
const port = 3000;
const {sequelize} = require('./src/config/connection.js');


//Settings
app.set('port', port);

//Ultilities
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());

//Endpoint to check server 
app.get('/', (req, res) => {
  res.send('Hello world!');
});

//Routes

app.use(require('./src/routes/empleadoRoutes.js'));
app.use(require('./src/routes/solicitudRoutes.js'));

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection success');
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listen on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Connection fail', error);
  });