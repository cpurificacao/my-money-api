const { HOST, PORT, DB } = require("../constants/database");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

module.exports = mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`);
