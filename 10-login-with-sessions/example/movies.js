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
  },

  {
    id: "jurassicworld",
    imageName: "jurassic-world.jpg",
    name: "Jurasic World",
    schedule: ["3pm", "7pm"],
    score: 4,
    description: "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, which escapes containment and goes on a killing spree.",
    directors: ["Colin Trevorrow"],
    writers: ["Jonathan Kasdan", "Lawrence Kasdan"],
    stars: ["Chris Pratt", "Bryce Dallas Howard", "Ty Simpkins"]
  },

  {
    id: "panteranegra",
    imageName: "pantera-negra.jpg",
    name: "Pantera Negra",
    schedule: ["5pm", "7pm"],
    score: 3.5,
    description: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
    directors: ["Ryan Coogler"],
    writers: ["Ryan Coogler", "Joe Robert Cole"],
    stars: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"]
  }
];

const scores = new Set(movies.map((movie) => movie.score.toString()).sort());

let userScores = {}

const getScores = () => scores;

const getMoviesWithScore = (score) => {
  return movies.filter((movie) => movie.score.toString() === score.toString());
};

const getMovies = (opts = {}) => {
  const filtered = opts.score && getMoviesWithScore(opts.score) || movies;
  const withUserScore = (movie) => Object.assign({}, movie, {userScore: userScores[movie.id]});
  return filtered.map(withUserScore);
};

const getMovie = (id) => {
  return movies.find((movie) => movie.id === id);
};

const addUserScore = ({movie_id, score}) => {
  userScores[movie_id] = parseFloat(score, 10)
};

const updateUserScore = addUserScore

module.exports = { getScores, getMovies, getMovie, addUserScore, updateUserScore }
