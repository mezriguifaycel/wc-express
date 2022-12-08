const express = require("express");
const app = express();
const daysList = ["Mon", "Tue", "Wed", "Thu", "Fri"];
app.use(express.json());
const PORT = 5000;

const availibility = (req, res, next) => {
  const date = new Date();
  let day = date.getDay();
  let hours = date.getHours();
  if (day >= 1 && day <= 5 && hours > 9 && hours < 17) {
    next();
  } else {
    res.send("You are not authorized !");
  }
};

app.use(availibility);

app.use(express.static(__dirname + "/pages"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/Home.html");
});

app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`Serveur on marche sur le port ${PORT} ...`)
);
