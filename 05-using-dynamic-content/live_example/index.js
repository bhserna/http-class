const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.use(expressLayouts);
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

const movies =[
  { imageName: "avengers.jpg", name: "Avengers", schedule: ["4pm", "6pm"] },
  { imageName: "coco.jpg", name: "Coco", schedule: ["8pm", "10pm"] },
  { imageName: "deadpool2.jpg", name: "Dead Pool 2", schedule: ["7pm", "9pm"] },
  { imageName: "han-solo.jpg", name: "Han Solo", schedule: ["4pm", "6pm"] }
]

app.get('/', (req, res) => {
  res.render("index", { movies: movies });
});

app.listen(3000, () => console.log('App listening on port 3000!'));
