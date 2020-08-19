const { DB_HOST, DB_PORT, DB_NAME } = process.env;
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const uri = `mongodb://${DB_HOST || "localhost"}:${DB_PORT || 27017}/${
  DB_NAME || "my-money"
}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = mongoose.connect(uri, options);
