const app = require("express")();

const bodyparser = require("body-parser");

app.use(bodyparser.json());

app.get("/", (req, res) => {
   res.status(200).send();
});

app.get("/users", (req, res) => {
   const users = [
      {
         name: "Vitor",
         mail: "vitor@email.com"
      }
   ];
   res.status(200).json(users);
});

app.post("/users", (req, res) => {
   res.status(201).json(req.body);
});

module.exports = app;
