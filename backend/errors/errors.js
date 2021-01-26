class NoRightsError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

class InvalidDataError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

module.exports = {
  NoRightsError,
  NotFoundError,
  InvalidDataError
};