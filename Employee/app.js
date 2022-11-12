const express = require("express");
const router = require("./router/index");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
