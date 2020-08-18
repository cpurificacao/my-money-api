const { Schema } = require("mongoose");
const restful = require("node-restful");

const creditSchema = new Schema({
  name: {
    type: String,
    required: [true, "Informe o nome do crédito!"],
  },
  value: {
    type: Number,
    min: [1, "O valor do crédito não pode ser menor que 1!"],
    required: [true, "Informe o valor do crédito!"],
  },
});

const debitSchema = new Schema({
  name: {
    type: String,
    required: [true, "Informe o nome do débito!"],
  },
  value: {
    type: Number,
    min: [1, "O valor do débito não pode ser menor que 1!"],
    required: [true, "Informe o valor do débito!"],
  },
  status: {
    type: String,
    required: [true, "Informe o status do débito!"],
    uppercase: true,
    enum: [
      ["AGENDADO", "PAGO", "PENDENTE"],
      "O status do débito deve ser AGENDADO, PAGO ou PENDENTE!",
    ],
  },
});

const billingCycleSchema = new Schema({
  month: {
    type: Number,
    min: [1, "O mês deve estar entre 1 e 12!"],
    max: [12, "O mês deve estar entre 1 e 12!"],
    required: [true, "Informe o mês do ciclo!"],
  },
  year: {
    type: Number,
    min: [1970, "O ano deve estar entre 1970 e 2100!"],
    max: [2100, "O ano deve estar entre 1970 e 2100!"],
    required: [true, "Informe o ano do ciclo!"],
  },
  credits: [creditSchema],
  debits: [debitSchema],
});

module.exports = restful.model("BillingCycle", billingCycleSchema);
