const { User } = require('../../models');
const createError = require('http-errors');
const getJwtInCookie = require('../../src/lib/getJwtInCookie');

exports.login = async (req, res, next) => {
  const { kakaoId, kakaoNickname } = req.body;
  
  if (!kakaoId && !kakaoNickname) return next(createError(400, 'kakaoId, Nickname are required'));

  try {
    const [user] = await User.findOrCreate({
      where: { kakaoId },
      defaults: { nickname: kakaoNickname }
    });
    
    const tokenData = {
      kakaoId: user.kakaoId,
      nickname: user.nickname
    };

    getJwtInCookie({ res, data: tokenData });
    
    return res.json({ 
      kakaoId: user.kakaoId,
      nickname: user.nickname
    });
  } catch (error) {
    const { errors } = error;

    if (!errors) return next(error);

    if (errors[0].type === 'unique violation' && errors[0].path === 'users.nickname') {
      return res.status(409).send();
    }

    return next(error);
  }
};

exports.logout = (req, res, next) => {
  res.clearCookie('courtFinderJwt', { path: '/' });

  return res.send();
};

exports.validateNicknameConflict = async (req, res, next) => {
  const { nickname } = req.params;

  if (!nickname) return next(createError(400, 'nickname is required'));

  const user = await User.findOne({ 
    where: { nickname },
    attributes: ['kakaoId']
  });
  let isConflict = false;
  
  if (user) isConflict = true;

  return res.json({ isConflict });
};