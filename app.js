const express = require('express');
const app = express();

/** Decode Form URL Encoded data */
app.use(express.urlencoded({extended: true})); 

/** Show page with a form */
app.get('/', (req, res) => {
  res.send(`<form method="POST" action="/">
  <input type="text" name="username">
  <input type="submit">
</form>`);
});

/** Process POST request */
app.post('/', function (req, res) {
    const name  = req.body.username; //me salía vacio debido a que al name le estaba poniendo corchetes
    res.send(`<h1>Hola ${name}!</h1>`);
});

/** Run the app */
app.listen(3000, () => console.log('listening on port 3000'));

