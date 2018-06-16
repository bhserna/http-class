const Movies = require("./movies.js");
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.use(expressLayouts);
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const selectedScore = req.query.score;

  res.render("index", {
    movies: Movies.getMovies({ score: selectedScore }),
    scores: Movies.getScores(),
    selectedScore: selectedScore
  });
});

app.get("/:id", (req, res) => {
  res.render("show", { movie: Movies.getMovie(req.params.id) });
});

app.listen(3000, () => console.log('App listening on port 3000!'));
