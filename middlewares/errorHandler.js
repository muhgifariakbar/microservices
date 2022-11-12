function errorHandler(error, req, res, next) {
  let obj = { code: 500, response: { message: "Internal Server Error" } };
  if (
    error.name == "SequelizeValidationError" ||
    error.name === "SequelizeUniqueConstraintError"
  ) {
    obj.code = 400;
    obj.response.message = error.errors[0].message;
  } else if (error.name == "invalid_email/password") {
    obj.code = 401;
    obj.response.message = "invalid_email/password";
  } else if (error.name == "JsonWebTokenError") {
    obj.code = 401;
    obj.response.message = "invalid token";
  } else if (error.name == "forbidden") {
    obj.code = 401;
    obj.response.message = "Please login first";
  } else if (error.name == "not found") {
    obj.code = 404;
    obj.response.message = "data not found";
  } else if (error.name == "forbidden change data") {
    obj.code = 401;
    obj.response.message = "not authorized";
  } else {
    obj.code = 500;
    obj.response.message = "Internal Server Error";
    console.log(error, "dari error handel");
  }

  res.status(obj.code).json(obj.response);
}

module.exports = errorHandler;
