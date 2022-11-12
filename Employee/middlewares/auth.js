const { User } = require("../models");
const { tokenVerification } = require("../helper/jwt");

async function auth(req, res, next) {
  try {
    let access_token = req.headers.access_token;
    if (!access_token) throw { name: "forbidden" };
    else {
      let payload = tokenVerification(access_token);
      let user = await User.findByPk(payload.id);
      if (!user) {
        throw { name: "forbidden" };
      } else {
        req.user = { id: user.id, role: user.role, email: user.email };
      }
      next();
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = auth;
