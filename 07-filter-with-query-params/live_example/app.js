const Movies = require("./movies.js");
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.use(expressLayouts);
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const scores = Movies.getScores();
  const selectedScore = parseFloat(req.query.score, 10);
  const filteredMovies = Movies.getMoviesWithScore(selectedScore);

  res.render("index", {
    movies: filteredMovies,
    scores: scores,
    selectedScore: selectedScore
  });
});

app.get(":id", (req, res) => {
  const movie = Movies.findById(req.params.id);
  res.render("show", { movie: movie })
});

app.listen(3000, () => console.log('App listening on port 3000!'));
