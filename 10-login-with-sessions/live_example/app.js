const Movies = require("./movies.js");
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
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

app.post("/user_scores", (req, res) => {
  Movies.addUserScore(req.body);
  res.redirect("/");
});

app.patch("/user_scores", (req, res) => {
  Movies.updateUserScore(req.body);
  res.redirect("/");
});

app.listen(3000, () => console.log('App listening on port 3000!'));
