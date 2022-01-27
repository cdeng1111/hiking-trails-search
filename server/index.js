const path = require('path');
const express = require('express');
const Trail = require('../db/index.js');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

const PORT = 3000;

app.get('/trails', async (req, res) => {
  try {
      const results = await Trail.find();
      res.status(201).send(results);
    } catch (error) {
      res.status(500).send(error);
    }
  });


app.post('/trails', async (req, res) => {
  const filter = {
    id: req.body.id,
  }
  try {
    const update =  await Trail.updateOne(filter, req.body, {upsert: true});
    res.status(201).send('A trail has been saved.')
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
