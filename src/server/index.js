const { PORT } = require("../constants/server");
const express = require("express");

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`SERVER is running on port ${PORT}...`));
