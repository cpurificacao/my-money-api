const _ = require("lodash");

const getErrorMessages = (errors) => {
  const errorMessages = [];

  _.forIn(errors, (err) => errorMessages.push(err.message));

  return errorMessages;
};

module.exports = (req, res, next) => {
  const { errors } = res.locals.bundle;

  if (errors) {
    const errorMessages = getErrorMessages(errors);

    return res.status(400).json({ errors: errorMessages });
  }

  next();
};
