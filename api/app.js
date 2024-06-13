const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The Bear & The Nightingale Dreams",
    },
    {
      id: "2",
      title: "Game Review: Ninja Brazilian Diamond",
    },
    {
      id: "3",
      title: "Show Review: Alice in Wonderland",
    },
  ]);
});

app.listen(4000, () => {
  console.log("Listening for requests on port 4000...");
});
