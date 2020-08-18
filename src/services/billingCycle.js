const billingCycleModel = require("../database/models/billingCycle");

billingCycleModel.methods(["get", "post", "put", "delete"]);
billingCycleModel.updateOptions({ new: true, runValidators: true });

billingCycleModel.route("count", (req, res, next) => {
  billingCycleModel.count((err, data) => {
    if (err) {
      return res.status(500).json({ errors: err });
    }

    res.json({ count: data });
  });
});

module.exports = billingCycleModel;
