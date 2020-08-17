const port = 4000;

const express = require("express");

const app = express();

app.use(express.json());

app.listen(port, () => console.log(`SERVER is running on port ${port}...`));
