const cors = require("cors");

const options = {
  origin: "*",
  methods: ["POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Origin", "X-Request-With", "Content-Type", "Accept"],
};

module.exports = cors(options);
