const { Court, Sequelize: { Op } } = require('../../models');
const createError = require('http-errors');

exports.search = async (req, res, next) => {
  const { match, city, district } = req.query;
  const page = parseInt(req.query.page);
  const size = parseInt(req.query.size);
  
  if (!page || !size) {
    return next(createError(400, "wrong page, size"));
  }
  
  const config = {
    offset: (page -1 ) * size,
    limit: size,
    attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
    where: {}
  };

  if (match) config.where = { 
    [Op.or]: [
      {
        name: { [Op.like]: `%${match}%` }
      },
      {
        address: { [Op.like]: `%${match}%` }
      }
    ]
  }

  if (city) config.where.city = city;

  if (district) config.where.district = district;

  try {
    const data = await Court.findAndCountAll(config);

    const sendingData = {
      totalCount: data.count,
      courts: data.rows
    }

    return res.json(sendingData);
  } catch (error) {
    next(error);
  }
};

exports.readCourt = async (req, res, next) => {
  const { id } = req.params;

  if (!id) return next(createError(400, "ID is required"));

  try {
    const court = await Court.findOne({
      where: { id },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'deletedAt']
      }
    });

    if (!court) return res.status(204).send();

    return res.json(court);
  } catch (error) {
    return next(error);
  }
}