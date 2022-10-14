require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const { WarehouseItem } = require('./db/models')


//1
app.get('/items', async (req, res, next) => {
  let items = await WarehouseItem.findAll({
    where: {
      isUsed: false
    }
  });

  res.status('200')
  res.json(items)
})


//2
app.get('/items/:name', async (req, res, next) => {
  const { nameParam }
  let items = await WarehouseItem.findAll({
    where: {
      isUsed: false
    }
  });

  res.status('200')
  res.json(items)
})



app.put('/items/:id', async (req, res, next) => {
  let items = await WarehouseItem.findAll({
    where: {
      isUsed: false
    }
  });

  res.status('200')
  res.json(items)
})




app.delete('/items/:id', async (req, res, next) => {
  let items = await WarehouseItem.findAll({
    where: {
      isUsed: false
    }
  });

  res.status('200')
  res.json(items)
})


if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}
