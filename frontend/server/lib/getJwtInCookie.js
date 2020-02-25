const jwt = require('jsonwebtoken');
// token max age 30일
const MAX_AGE = 1000*60*60*24*30;

const getJwtInCookie = ({ res, data }) => {
  const token = jwt.sign(
    data,
    process.env.JWT_SECRET,
    {
      expiresIn: `${MAX_AGE}`
    }
  );
  
  return res.cookie('courtFinderJwt', token, { path: '/', httpOnly: true, maxAge: MAX_AGE });
};

module.exports = getJwtInCookie;