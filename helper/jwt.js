const jwt = require("jsonwebtoken");
let JWT_TOKEN = "secret";
const createToken = (payload) => jwt.sign(payload, JWT_TOKEN);
const tokenVerification = (token) => jwt.verify(token, JWT_TOKEN);

module.exports = { createToken, tokenVerification };
