const { Review, User } = require('../../models');
const createError = require('http-errors');

exports.register = async (req, res, next) => {
  if (!req.body.text || !req.query.courtId) {
    return next(createError(400))
  }
  
  try {
    const review = await Review.create({
      text: req.body.text,
      writerId: req.user.kakaoId,
      courtId: req.query.courtId
    });

    const sendingData = {
      id: review.id,
      text: review.text,
      createdAt: review.createdAt
    };

    return res.json(sendingData);
  }
  catch(error) {
    return next(error);
  }
};

exports.getMyReview = async (req, res, next) => {
  if (!req.query.courtId) {
    return next(createError(400));
  }
  
  try {
    const review = await Review.findOne({
      where: {
        courtId: req.query.courtId,
        writerId: req.user.kakaoId
      },
      attributes: ['id', 'text', 'createdAt'],
    });

    if (review === null) return res.status(204).send();
    
    const sendingData = {
      id: review.id,
      text: review.text,
      createdAt: review.createdAt
    };

    return res.json(sendingData);
  }
  catch(error) {
    return next(error);
  }
};

exports.getReviews = async (req, res, next) => {
  if (!req.query.courtId) {
    return next(createError(400));
  }
  
  const page = parseInt(req.query.page);
  const size = parseInt(req.query.size);
  if (!page || !size) {
    return next(createError(400, "wrong page, size"));
  }

  const config = {
    where: {
      courtId: req.query.courtId,
    },
    attributes: ['id', 'text', 'createdAt'],
    offset: (page -1 ) * size,
    limit: size,
    include: [{
      model: User,
      as: 'writer',
      attributes: ['nickname']
    }]
  }

  try {
    const { count, rows: reviews } = await Review.findAndCountAll(config);

    if (reviews.length === 0) return res.status(204).send();

    const hasNextPage = Math.ceil(count/size) > page;

    const sendingData = {
      hasNextPage,
      reviews
    };

    return res.json(sendingData);
  }
  catch(error) {
    return next(error);
  }
};