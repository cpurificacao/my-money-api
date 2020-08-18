const billingCycleModel = require("../database/models/billingCycle");

billingCycleModel.methods(["get", "post", "put", "delete"]);
billingCycleModel.updateOptions({ new: true, runValidators: true });

module.exports = billingCycleModel;
