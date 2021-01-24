class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

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



module.exports = NotFoundError; 
module.exports = NoRightsError; 
module.exports = InvalidDataError; 