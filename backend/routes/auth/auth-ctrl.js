const { User } = require('../../models');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');

//token, cookie 30일 유지.
const MAX_AGE = 1000*60*60*24*30;

exports.login = async (req, res, next) => {
  const { kakaoId, kakaoNickname } = req.body;
  
  if (!kakaoId && !kakaoNickname) return next(createError(400, "kakaoId, Nickname are required"));

  try {
    const [user] = await User.findOrCreate({
      where: { kakaoId },
      defaults: { nickname: kakaoNickname }
    });
    
    const token = generateToken({
      kakaoId: user.kakaoId,
      nickname: user.nickname
    });
    
    res.cookie('courtFinderJwt', token, { path: '/', httpOnly: true, maxAge: MAX_AGE });

    return res.json({ 
      kakaoId: user.kakaoId,
      nickname: user.nickname
    });
  } catch (error) {
    return next(error);
  }
};

exports.logout = (req, res, next) => {
  res.clearCookie('courtFinderJwt', { path: '/' });

  return res.send();
}

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