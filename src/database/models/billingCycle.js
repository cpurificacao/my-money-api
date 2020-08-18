const { Schema } = require("mongoose");
const restful = require("node-restful");

const creditSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    min: 1,
    required: true,
  },
});

const debitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    min: 1,
    required: true,
  },
  status: {
    type: String,
    required: true,
    uppercase: true,
    enum: ["PAGO", "PENDENTE", "AGENDADO"],
  },
});

const billingCycleSchema = new Schema({
  month: {
    type: Number,
    min: 1,
    max: 12,
    required: true,
  },
  year: {
    type: Number,
    min: 1970,
    max: 2100,
    required: true,
  },
  credits: [creditSchema],
  debits: [debitSchema],
});

module.exports = restful.model("BillingCycle", billingCycleSchema);
