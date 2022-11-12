const bcrypt = require("bcryptjs");

const hashPassword = (passwordAsli) => bcrypt.hashSync(passwordAsli, 8);

const comparePassword = (passwordAsli, passwordYangSudahDiHash) =>
  bcrypt.compareSync(passwordAsli, passwordYangSudahDiHash);

module.exports = { hashPassword, comparePassword };
