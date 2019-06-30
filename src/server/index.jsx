import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import path from "path";

import { html, Hello } from "../views";

const app = express();

const staticPath = path.join(__dirname, "..", "assets");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  const body = ReactDOMServer.renderToStaticMarkup(<Hello />);
  res.send(
    html({
      body,
      scripts: [],
      css: ["hello.css"]
    })
  );
});

app.listen(3000, () => {
  console.log("app listening on port 3000!");
  console.log("open: http://localhost:3000");
});
