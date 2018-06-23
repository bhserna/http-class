const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.use(express.static('public'));
app.use(expressLayouts);

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render("index"));

app.listen(3000, () => console.log('App listening on port 3000!'));
