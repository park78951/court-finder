const { Court, Sequelize: { Op } } = require('../../models');
const createError = require('http-errors');

exports.search = async (req, res, next) => {
  const { page, size, query: { match, filter } } = req.body;

  if (!page || !size) return next(createError(400, "page and size are required"));

  const where = { [Op.or]: [
    {
      name: { [Op.like]: `%${match}%` }
    },
    {
      address: { [Op.like]: `%${match}%` }
    }
  ]};
  
  if (filter.city) where.city = filter.city;
  if (filter.district) where.district = filter.district;

  const courts = await Court.findAll({ where })

  return res.json(courts);
};