require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());


app.get('/items', async (req, res, next) => {
  let items = await WarehouseItem.findAll({
    where: {
      i
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
