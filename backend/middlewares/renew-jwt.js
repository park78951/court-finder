const getJwtInCookie = require('../src/lib/getJwtInCookie');

const renewToken = (req, res, next) => {
  if (!req.decoded) return next();
  // 갱신 기준 일수
  const CRITERIA_PERIOD = 40;
  const { kakaoId, nickname } = req.decoded;

  try {
    const restDays = (req.decoded.exp * 1000 - Date.now()) / (1000 * 60 * 60 * 24); 
    
    if (restDays > CRITERIA_PERIOD) return next();

    const tokenData = { kakaoId, nickname };

    getJwtInCookie({ res, data: tokenData });
    
    return next();    
  } catch (error) {
    return next(error);
  }
};

module.exports = renewToken;