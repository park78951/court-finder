const { Court, Sequelize: { Op } } = require('../../models');
const createError = require('http-errors');

exports.search = async (req, res, next) => {
  const { page, size, query: { match, filter } } = req.body;

  if (!page || !size) return next(
    createError(400, "page and size should be defined minimum 1")
  );
  
  const config = {
    offset: (page -1 ) * size,
    limit: size,
    where: { [Op.or]: [
      {
        name: { [Op.like]: `%${match}%` }
      },
      {
        address: { [Op.like]: `%${match}%` }
      }
    ]},
    attribute: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
  };

  if (filter.city) config.where.city = filter.city;
  if (filter.district) config.where.district = filter.district;
  
  try {
    const data = await Court.findAndCountAll(config);

    const sendingData = {
      hasNextPage: Math.ceil(data.count/size) > page,
      courts: data.rows
    }

    return res.json(sendingData);
  } catch (error) {
    next(error);
  }
};