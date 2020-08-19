const billingCycleModel = require("../database/models/billingCycle");

billingCycleModel.methods(["get", "post", "put", "delete"]);
billingCycleModel.updateOptions({ new: true, runValidators: true });

billingCycleModel.route("count", (req, res, next) => {
  billingCycleModel.count((err, data) => {
    if (err) {
      return res.status(500).json({ errors: [err] });
    }

    res.json({ count: data });
  });
});

billingCycleModel.route("summary", (req, res, next) => {
  billingCycleModel.aggregate(
    [
      {
        $project: {
          totalCredit: {
            $sum: "$credits.value",
          },
          totalDebit: {
            $sum: "$debits.value",
          },
        },
      },
      {
        $group: {
          _id: null,
          totalCredit: {
            $sum: "$totalCredit",
          },
          totalDebit: {
            $sum: "$totalDebit",
          },
        },
      },
      {
        $project: {
          _id: false,
          totalCredit: true,
          totalDebit: true,
        },
      },
    ],
    (err, data) => {
      if (err) {
        return res.status(500).json({ errors: [err] });
      }

      res.json(data[0] || { totalCredit: 0, totalDebit: 0 });
    }
  );
});

module.exports = billingCycleModel;
