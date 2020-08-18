const { HOST, PORT, DB } = require("../constants/database");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const uri = `mongodb://${HOST}:${PORT}/${DB}`;
const options = { useNewUrlParse: true, useUnifiedTopology: true };

module.exports = mongoose.connect(uri, options);
