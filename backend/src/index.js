const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(cors());
// Converte o body da requisiçao (json) em objeto JS
app.use(express.json());
app.use(routes);

app.listen(3333);
