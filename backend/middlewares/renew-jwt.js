const getJwtInCookie = require('../src/lib/get-jwt-in-cookie');

const renewToken = (req, res, next) => {
  if (!req.user) return next();
  // 갱신 기준 일수
  const CRITERIA_PERIOD = 10;
  const { kakaoId, nickname } = req.user;

  try {
    const restDays = (req.user.exp * 1000 - Date.now()) / (1000 * 60 * 60 * 24); 
    
    if (restDays > CRITERIA_PERIOD) return next();

    const tokenData = { kakaoId, nickname };

    getJwtInCookie({ res, data: tokenData });
    
    return next();    
  } catch (error) {
    return next(error);
  }
};

module.exports = renewToken;