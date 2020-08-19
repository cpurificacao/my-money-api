const { SV_PORT } = process.env;
const express = require("express");

const cors = require("../middlewares/cors");

const billingCycleRouter = require("../routers/billingCycle");

const app = express();

app.use(express.json());

app.use(cors);

app.use("/api", billingCycleRouter);

app.listen(SV_PORT, () =>
  console.log(`BACKEND is running on port ${SV_PORT}...`)
);
