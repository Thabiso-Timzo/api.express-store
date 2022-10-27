const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/index');

const auth = (req, res, next) => {
  try {
    const cookies = req.headers.cookies;
    const token = cookies.split("=")[1];
    if (!token) {
      res.status(404).json({msg: 'No token found.'});
    }

    jwt.verify(String(token), jwt_secret, (err, user) => {
      if (err) {
        return res.status(400).json({msg: 'Invalid token'});
      }
    //console.log(user.id)
    req.id = user.id
    })
    next();
  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
}

const refreshToken = async (req, res, next) => {
  const cookies = req.headers.cookies;
  const prevToken = cookies.split("=")[1];
  if (!prevToken) {
      return res.status(400).json({msg: "Couldn't find token."});
  }
  jwt.verify(String(prevToken), jwt_secret, (err, user) => {
      if (err) {
          console.log(err);
          return res.status(403).json({msg: 'Authentication failed'})
      }
      res.clearCookie(`${user.id}`);
      req.cookies[`${user.id}`] = "";

      const token = jwt.sign({id: user.id}, jwt_secret, {
          expiresIn: '35s'
      });

      res.cookie(String(user.id), token, {
          path: '/',
          expires: new Date(Date.now() + 1000 * 30),
          httpOnly: true,
          sameSite: 'lax'
      });

      req.id = user.id;
      next();
  }) 
}

module.exports = {
  auth,
  refreshToken
} 