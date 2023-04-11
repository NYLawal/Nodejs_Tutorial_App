const express = require('express');
const app = express();

app.get('/user/:name/:age/:sex', function(req, res) {
     res.json(req.params);
  });
  
app.listen(3000, () =>
console.log('server listening on port 3000')
)
