const cors = require("cors");

const options = {
  origin: "192.168.200.5",
  methods: ["POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Origin", "X-Request-With", "Content-Type", "Accept"],
};

module.exports = cors(options);
