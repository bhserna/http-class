const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.use(expressLayouts);
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

const movies = [
  {
    id: "avengers",
    imageName: "avengers.jpg",
    name: "Avengers",
    schedule: ["4pm", "6pm"],
    score: 4,
    description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    directors: ["Anthony Russo", "Joe Russo"],
    writers: ["Christopher Markus", "Stephen McFeely"],
    stars: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"]
  },

  {
    id: "coco",
    imageName: "coco.jpg",
    name: "Coco",
    schedule: ["8pm", "10pm"],
    score: 4.5,
    description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    directors: ["Lee Unkrich", "Adrian Molina"],
    writers: ["Lee Unkrich", "Jason Katz"],
    stars: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"]
  },

  {
    id: "deadpool2",
    imageName: "deadpool2.jpg",
    name: "Dead Pool 2",
    schedule: ["7pm", "9pm"],
    score: 4.5,
    description: "Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.",
    directors: ["David Leitch"],
    writers: ["Rhett Reese", "Paul Wernick"],
    stars: ["Ryan Reynolds", "Josh Brolin", "Morena Baccarin"]
  },

  {
    id: "hansolo",
    imageName: "han-solo.jpg",
    name: "Han Solo",
    schedule: ["4pm", "6pm"],
    score: 4,
    description: "During an adventure into the criminal underworld, Han Solo meets his future copilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.",
    directors: ["Ron Howard"],
    writers: ["Jonathan Kasdan", "Lawrence Kasdan"],
    stars: ["Alden Ehrenreich", "Woody Harrelson", "Emilia Clarke"]
  }
];

app.get('/', (req, res) => {
  res.render("index", { movies: movies })
});

app.get("/:id", (req, res) => {
  const movie = movies.find((movie) => movie.id === req.params.id);
  res.render("show", { movie: movie })
});

app.listen(3000, () => console.log('App listening on port 3000!'));
