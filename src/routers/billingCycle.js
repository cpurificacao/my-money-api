const { Router } = require("express");
const billingCycleService = require("../services/billingCycle");

const router = Router();

billingCycleService.register(router, "/billingCycle");

module.exports = router;
