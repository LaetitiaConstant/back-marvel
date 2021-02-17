const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(formidable());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=NCCK2IO62SskO9wr"
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=NCCK2IO62SskO9wr"
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Cette route n'existe pas" });
});

app.listen(3100, () => {
  console.log("Server Started");
});
