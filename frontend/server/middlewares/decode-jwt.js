const jwt = require('jsonwebtoken');

const decodeJwt = (req, res, next) => {
  if (!req.cookies.courtFinderJwt) {
    return next();
  }

  try {
    const secret = process.env.JWT_SECRET;
    const decodedToken = jwt.verify(req.cookies.courtFinderJwt, secret);

    req.decoded = {
      kakaoId: decodedToken.kakaoId,
      nickname: decodedToken.nickname,
      exp: decodedToken.exp
    };
  } catch (error) {
    res.clearCookie('token', { path: '/' });
  }

  return next();
};

module.exports = decodeJwt;