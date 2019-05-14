const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {
  const token = req.headers["x-auth-token"];

  if (!token) {
    return res.status(401).json({ msg: "user not logged in" });
  }

  try {
    const decode = jwt.verify(token, config.get("jwtSecret"));

    req.user = decode;

    console.log("req.user = ", req.user);
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid Token" });
  }
};

module.exports = auth;
