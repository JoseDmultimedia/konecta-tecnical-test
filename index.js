const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

const app = express();
const port = 3000;


//Settings
app.set('port', port);

//Ultilities
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

//Endpoint to check server 
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});