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

  // res.status('200')
  res.json(items)
})



//2
app.get('/items/:name', async (req, res, next) => {
  const { name } = req.params;
  let item = await WarehouseItem.findOne({
    where: {
      name
    }
  });

  if (item) {
    // res.status('200')
    // res.setHeader('Content-Type', 'application/json')
    res.json(item)
  } else {
    res.status('404');
    // res.setHeader('Content-Type', 'application/json');
    res.json({ message: 'Warehouse Item not found' })
  }
})



app.put('/items/:id', async (req, res, next) => {

  const { id } = req.params;
  const { name, price, quantity, isUsed } = req.body;

  let item = await WarehouseItem.findByPk(id);

  if (name !== undefined) item.name = name;
  if (price !== undefined) item.price = price;
  if (quantity) item.quantity = quantity;
  if (isUsed !== undefined) item.isUsed = isUsed;

  if (item) {
    res.json(item)
  } else {
    res.status('404');


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
