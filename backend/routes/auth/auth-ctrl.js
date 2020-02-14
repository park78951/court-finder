const { User } = require('../../models');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');

//token, cookie 30일 유지.
const MAX_AGE = 1000*60*60*24*30;

exports.login = async (req, res, next) => {
  const { kakaoId } = req.body;
  
  if (!kakaoId) return next(createError(400, "kakaoId is required"));

  try {
    const [user] = await User.findOrCreate({
      where: { kakaoId },
    });
    
    const token = generateToken({
      kakaoId: user.kakaoId,
    });
    
    res.cookie('court-finder-jwt', token, { path: '/', httpOnly: true, maxAge: MAX_AGE });

    return res.json({ kakaoId: user.kakaoId })
  } catch (error) {
    return next(error);
  }
};

const generateToken = dataObj => {
  const token = jwt.sign(
    dataObj,
    process.env.JWT_SECRET,
    {
      expiresIn: `${MAX_AGE}`
    }
  );
  
  return token;
}